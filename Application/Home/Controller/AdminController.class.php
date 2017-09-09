<?php
namespace Home\Controller;
use Think\Controller;
use Home\Controller\BaseController;
class AdminController extends BaseController {
    protected $userinfo;
    /**
     * 构造方法
     */
    public function  __construct($auth = array())
    {
        parent::__construct();
        //查看用户是否登录
        $this->userinfo = session('userinfo');
        if(empty($this->userinfo))
        {
            $result['status'] = 0;
            $result['isLogin'] = 0;
            $result['error'] = '用户未登录';
            $this->ajaxReturn($result);
        }
        //查看权限是否存在
        $map['class_name'] = $auth['class_name'];
        $isAuth = M('auth')->where($map)->find();
        if(!$isAuth)
        {
            //执行添加
            M('auth')->data($auth)->add();
        }
        //验证权限
        if($userinfo['username'] != 'admin')
        {
            $authRes = $this->checkAuth($auth['class_name']);
            if(!$authRes)
            {
                $result['status'] = 0;
                $result['error'] = '权限不足';
                $this->ajaxReturn($result);
            }
        }
    }
    /**
     * 后台首页
     */
    public function index(){
        $this->display();
    }
    /**
     * 验证用户是否拥有权限
     */
    public function checkAuth($className='')
    {
        $userinfo = session('userinfo');
        $map['id'] = $this->userinfo['role_id'];
        $roleArr = M('role')->where($map)->find();
        $idsArr = explode(',', $roleArr['auth_ids']);
        $condition['id'] = array('in',$idsArr);
        $authArr = M('auth')->where($condition)->select();
        $hasAuth = array();
        foreach ($authArr as $key=>$val)
        {
            $hasAuth[] = $val['class_name'];
        }
        if(!in_array($className,$hasAuth))
        {
            //权限不足
            return false;
        }
        return ture;
    }
}