<?php
namespace Home\Controller;
use Think\Controller;
use Home\Controller\BaseController;
class AdminController extends BaseController {
    public function __construct()
    {
        $auth['title'] = '后台首页';
        $auth['class_name'] = __CLASS__;
        parent::__construct($auth);
    }
    /**
     * 后台首页
     */
    public function index(){
        $this->display();
    }
    public function top()
    {
        $this->display();
    }
    public function left()
    {
        $this->display();
    }
    public function main()
    {
        $this->display();
    }
}