<?php
namespace Home\Controller;
use Think\Controller;
use Home\Controller\BaseController;
class AdminController extends BaseController {
    public function __construct()
    {
        $auth['title'] = '权限管理';
        $auth['class_name'] = __CLASS__;
        parent::__construct($auth);
    }
    /**
     * 审核用户
     */
    public function auditAdmin()
    {
        $data['status'] = I('status',0,'intval');
        $res = M('admin')->where(array('id'=>I('id')))->data($data)->save();
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
     * 用户列表
     */
    public function getList()
    {
        $limit = I('limit',10,'intval');
        $offset = I('offset',0,'intval');
        $map['username'] = array('neq','admin');
        $res['count'] = M('admin')->where($map)->limit($limit,$offset)->count();
        $row = M('admin')->where($map)->limit($limit,$offset)->select();
        $res['status'] = 1;
        $res['list'] = $row;
        //查询角色
        foreach ($row as $key=>$val)
        {
            $role = M('role')->where(array('id'=>$val['role_id']))->find();
            if($role)
            {
                $row[$key]['title'] = $role['title'];
            }else
            {
                $row[$key]['title'] = '-----';
            }
        }
        $this->assign('row',$row);
        $this->display();
        //$this->ajaxReturn($res);
    }
    /**
     * 获取角色列表
     */
    public function getRole()
    {
        $role = M('role')->select();
        $res['status'] = 1;
        $res['list'] = $role;
        $this->ajaxReturn($res);
    }
    /**
     * 给用户添加角色
     * @param id 用户id
     * @param roleId 角色id
     */
    public function addAdminRole()
    {
        $data['role_id'] = I('roleId');
        $res = M('admin')->where(array('id'=>I('id')))->data($data)->save();
        if($res)
        {
            $result['status'] = 1;
        }else
        {
            $result['status'] = 0;
            $result['error'] = '操作失败';
        }
        $this->ajaxReturn($result);
    }
}