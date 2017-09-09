<?php
namespace Home\Controller;
use Think\Controller;
use Home\Controller\BaseController;
class BookController extends BaseController {
    public function __construct()
    {
        $auth['title'] = '图书管理';
        $auth['class_name'] = __CLASS__;
        parent::__construct($auth);
    }
    /**
     * 图书入库操作
     */
    public function addBook()
    {
        $data = I('post.');
        //图书仓库数据
        $dataR['status'] = 0;
        $dataR['book_id'] = $data['book_id'];
        $dataR['pur_price'] = $data['pur_price'];
        $dataR['number'] = $data['number'];
        $dataR['create_time'] = date('Y-m-d H:i:s');
        if($data['isHas'] == 1)
        {
            //图书已存在只添加库存表
            $res = M('repertory')->data($dataR)->add();
        }else
        {
            //新图书数据
            $newBook['serial_number'] = $data['serial_number'];//图书编号
            $newBook['name'] = $data['name'];//图书名称
            $newBook['cate_id'] = $data['cate_id'];//图书分类ID
            $newBook['price'] = $data['price'];//图书售价
            $newBook['author'] = $data['author'];//作者
            $newBook['publish_club'] = $data['publish_club'];//图书出版社
            $newBook['num'] = 0;//数量
            //入图书表
            $res = M('book')->data($newBook)->add();
            //入仓库表
            $res = M('repertory')->data($dataR)->add();
        }
        if($res)
        {
            $result['status'] = 1;
        }else
        {
            $result['status'] = 0;
            $result['error'] = '添加失败';
        }
        $this->ajaxReturn($result);
    }
    /**
     * 库存审核
     * @param id 库存表主键
     * @param num 库存数量
     */
    public function checkBook()
    {
        $data['status'] = 1;
        $map['id'] = array('eq',I('id'));
        $reperRow = M('repertory')->where($map)->find();
        $resR = M('repertory')->where($map)->data($data)->save();
        if($resR)
        {
            //新增图书库存
            $condition['id'] = array('eq',$reperRow['book_id']);
            $res = M('book')->where($condition)->setInc('num',I('num'));
        }
        if($res)
        {
            $result['status'] = 1;
        }else
        {
            $result['status'] = 0;
            $result['error'] = '审核失败';
        }
        $this->ajaxReturn($result);
    }
    /**
     * 库存审核列表页
     */
    public function index()
    {
        $limit = I('limit',10,'intval');
        $offset = I('offset',0,'intval');
        $map['r.status'] = 0;
        $res['count'] = M('repertory')->alias('r')->join('book as b on r.book_id=b.id')->join('category as c on b.cate_id=c.id')->count();
        $row = M('repertory')->alias('r')->join('book as b on r.book_id=b.id')->join('category as c on b.cate_id=c.id')
                ->field('r.id,r.pur_price,r.number,r.create_time,b.serial_number,b.name,b.price,b.author,b.publish_club,c.title')
                ->limit($limit,$offset)
                ->select();
        $res['status'] = 1;
        $res['list'] = $row;
        $this->ajaxReturn($res);
    }
}