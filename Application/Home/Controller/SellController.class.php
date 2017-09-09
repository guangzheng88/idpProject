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
        $data = M('sell')->field('sell.id,b.name,sell.price,sell.num,actual_price,sell.create_time')->join('book as b on sell.book_id=b.id')->select();
        $this->ajaxReturn($data);
    }
    /**
     * 添加销售
     */
    public function addSell()
    {
        //减库存
    }
}