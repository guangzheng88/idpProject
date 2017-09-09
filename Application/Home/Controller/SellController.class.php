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
        $data = M('sell')->limit($limit,$offset)->field('sell.id,b.name,sell.price,sell.num,actual_price,sell.create_time')->join('book as b on sell.book_id=b.id')->select();
        $res['status'] = 1;
        $res['list'] = $data;
        $this->ajaxReturn($res);
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
        $data['create_time'] = data('Y-m-d H:i:s');
        $res = M('sell')->data($data)->add();
        if($res)
        {
            //减库存
            M('book')->where(array('id'=>$data['book_id']))->setDec('num',$data['num']);
        }
        if($res)
        {
            $result['status'] = 1;
        }else
        {
            $result['status'] = 0;
            $result['error'] = '添加销售记录失败';
        }
        $this->ajaxReturn($result);
    }
}