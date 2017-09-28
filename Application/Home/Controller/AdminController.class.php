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
        $data['status'] = I('get.status',0,'intval');
        $res = M('admin')->where(array('id'=>I('get.id')))->data($data)->save();
        if($res)
        {
            $result['status'] = 1;
            $this->success('操作成功',U('admin/getList'));exit;
        }else
        {
            $result['status'] = 0;
            $result['error'] = '操作失败';
            $this->error('操作失败');
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
        $Page  = new \Think\Page($res['count'],10);// 实例化分页类 传入总记录数和每页显示的记录数(25)
        $show  = $Page->show();// 分页显示输出
        $row = M('admin')->where($map)->limit($Page->firstRow.','.$Page->listRows)->order('id desc')->select();
        $res['status'] = 1;
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
        $res['list'] = $row;
        //角色
        $roles = M('role')->select();
        $res['role'] = $roles;
        $this->assign('row',$row);
        $this->assign('data',$row);
        $this->assign('page',$show);
        $this->assign('role',$roles);
        $this->display();
    }
    /**
     * 获取角色列表
     */
    public function getRole()
    {
        $role = M('role')->select();
        $res['status'] = 1;
        $res['list'] = $role;
        $this->assign('data',$role);
        $this->display();exit;
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
            $this->success('操作成功',U('admin/getList'));exit;
        }else
        {
            $result['status'] = 0;
            $result['error'] = '操作失败';
            $this->error($result['error']);
        }
        $this->ajaxReturn($result);
    }
}