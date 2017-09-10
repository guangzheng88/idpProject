<?php
namespace Home\Controller;
use Think\Controller;
use Home\Controller\BaseController;
class RoleController extends BaseController {
    public function __construct()
    {
        $auth['title'] = '角色管理';
        $auth['class_name'] = __CLASS__;
        parent::__construct($auth);
    }
    /**
     * 角色列表
     */
    public function getList()
    {
        $res = M('role')->select();
        $str = '';
        foreach ($res as $k=>$v)
        {
            $authIds = explode(',', $v['auth_ids']);
            foreach ($authIds as $key=>$val)
            {
                $authTitle = M('auth')->where(array('id'=>$val))->getField();
                if($key == 0)
                {
                    $str = $authTitle;
                }else
                {
                    $str .= ','.$authTitle;
                }
            }
            $res[$k]['auth'] = $str;
        }
        $result['status'] = 1;
        $result['list'] = $res;
        $this->ajaxReturn($result);
    }
    /**
     * 添加角色页面
     */
    public function index()
    {
        $row = M('auth')->select();
        $row['status'] = 1;
        $this->ajaxReturn($row);
    }
    /**
     * 添加角色
     */
    public function addAuth()
    {
        $post = I('post.');
        $data['title'] = $post['title'];
        $data['auth_ids'] = implode(',', $post['authId']);
        $data['create_time'] = date('Y-m-d H:i:s');
        $res = M('role')->data($data)->add();
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
}