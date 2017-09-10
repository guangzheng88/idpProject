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
            if($res)
            {
                $dataR['book_id'] = $res;
                $res = M('repertory')->data($dataR)->add();
            }
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
     * 库存审核列表页,图书列表页
     */
    public function index()
    {
        $limit = I('limit',10,'intval');
        $offset = I('offset',0,'intval');
        //搜索条件
        $name = I('name');
        $cate = I('cate');
        $status = I('status');
        if($name)
        {
            $map['name'] = array('like','%'.trim($name).'%');
        }
        if($cate){
            //查询分类
            $cate_id = M('category')->where(array('title'=>array('like'=>'%'.trim($cate).'%')))->getField('id');
            $cate_id = $cate_id ? $cate_id : 0;
            $map['b.cate_id'] = array('eq',$cate_id);
        }
        if($status == '1'){
            //查询已审核
            $map['r.status'] = array('eq',$status);
        }
        if($status == '2')
        {
            //查询未审核
            $map['r.status'] = array('eq','0');
        }
        $res['count'] = M('repertory')->alias('r')->where($map)->join('book as b on r.book_id=b.id')->join('category as c on b.cate_id=c.id')->count();
        $row = M('repertory')->alias('r')->where($map)->order('b.id desc')->join('book as b on r.book_id=b.id')->join('category as c on b.cate_id=c.id')
                ->field('r.id as r_id,b.id,r.status,b.num,r.pur_price,r.number,r.create_time,b.serial_number,b.name,b.price,b.author,b.publish_club,c.title')
                ->limit($limit,$offset)
                ->select();
        $res['status'] = 1;
        $res['list'] = $row;
        $this->ajaxReturn($res);
    }
    /**
     * 查询图书是否已存在
     */
    public function findBook()
    {
        $map['serial_number'] =I('serial_number');
        $bookInfo = M('book')->field('book.*,r.pur_price')->where($map)->join('repertory as r on r.book_id=book.id')->find();
        if($bookInfo)
        {
            $res['status'] = 1;
            $res['data'] = $bookInfo;
        }else
        {
            $res['status'] = 0;
        }
        $this->ajaxReturn($res);
    }
}