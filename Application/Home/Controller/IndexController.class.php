<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function __construct()
    {
        parent::__construct();
        //查看用户是否登录
        $userinfo = session('userinfo');
        if(empty($userinfo))
        {
            $result['status'] = 0;
            $result['isLogin'] = 0;
            $result['error'] = '用户未登录';
            $this->ajaxReturn($result);
        }
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