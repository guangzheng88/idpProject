<?php
namespace Home\Controller;
use Think\Controller;
class LoginController extends Controller {
    /**
     * 登录页
     */
    public function index()
    {
        $this->display();
    }
    /**
     * 用户登录
     */
    public function login()
    {
        $map['username'] = trim(I('post.username'));
        $map['password'] = md5(trim(I('post.password')));
        $res = M('admin')->where($map)->find();
        $result['status'] = 0;
        if(!$res)
        {
            $result['error'] = '用户名或密码错误';
            $this->ajaxReturn($result);
        }
        if($res['status'] != 1 && $res['username'] != 'admin')
        {
            $result['error'] = '用户未审核';
            $this->ajaxReturn($result);
        }
        //注册session
        session('userinfo',$res);
        $result['status'] = 1;
        $this->ajaxReturn($result);
    }
    /**
     * 用户注册,视图
     */
    public function registerView()
    {
       $this->display();
    }

    /**
     * 用户注册,入库
     */
    public function register()
    {
        $data['username'] = trim(I('post.username'));
        $isAdmin = $this->checkUser($data['username']);
        if($isAdmin){
            $result['status'] = 0;
            $result['error'] = '用户名已存在';
            $this->ajaxReturn($result);
        }
        $data['password'] = md5(trim(I('post.password')));
        $data['status'] = 0;
        $data['create_time'] = date('Y-m-d H:i:s');
        $res = M('admin')->data($data)->add();
        if($res)
        {
            $result['status'] = 1;
        }else
        {
            $result['status'] = 0;
        }
        $this->ajaxReturn($result);
    }
    /**
     * 检查用户是否存在
     */
    private function checkUser($username)
    {
        $map['username'] = trim($username);
        $res = M('admin')->where($map)->find();
        if($res)
        {
            return ture;
        }
        return false;
    }
}