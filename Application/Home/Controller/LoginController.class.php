<?php
namespace Home\Controller;
use Think\Controller;
class LoginController extends Controller {
    /**
     * 用户注册
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