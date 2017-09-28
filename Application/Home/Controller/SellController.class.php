<?php
namespace Home\Controller;
use Think\Controller;
use Home\Controller\BaseController;
class SellController extends BaseController {
    public function __construct()
    {
        $auth['title'] = '销售管理';
        $auth['class_name'] = __CLASS__;
        parent::__construct($auth);
    }
    /**
     * 销售列表页
     */
    public function index(){
        $limit = I('limit',10,'intval');
        $offset = I('offset',0,'intval');
        $res['count'] = M('sell')->count();
        $Page  = new \Think\Page($res['count'],10);// 实例化分页类 传入总记录数和每页显示的记录数(25)
        $show  = $Page->show();// 分页显示输出
        $data = M('sell')->limit($Page->firstRow.','.$Page->listRows)->order('sell.id desc')->field('sell.id,b.name,sell.price,sell.num,actual_price,sell.create_time')->join('book as b on sell.book_id=b.id')->select();
        $total_price = M('sell')->field('sum(sell.actual_price) as total_price')->join('book as b on sell.book_id=b.id')->find();
        $res['status'] = 1;
        $res['list'] = $data;
        $this->assign('data',$data);
        $this->assign('page',$show);
        $this->assign('total_price',$total_price['total_price']);
        $this->display();
    }
    /**
     * 添加销售
     */
    public function addSell()
    {
        $post = I('post.');
        $data['book_id'] = $post['book_id'];
        $data['num'] = $post['num'];
        $data['price'] = $post['price'];
        $data['actual_price'] = $data['num']*$data['price'];
        $data['create_time'] = date('Y-m-d H:i:s');
        $res = M('sell')->data($data)->add();
        if($res)
        {
            //减库存
            M('book')->where(array('id'=>$data['book_id']))->setDec('num',$data['num']);
        }
        if($res)
        {
            $this->success('操作成功');exit;
        }else
        {
            $result['status'] = 0;
            $result['error'] = '添加销售记录失败';
            $this->error('操作失败');exit;
        }
        $this->ajaxReturn($result);
    }
}