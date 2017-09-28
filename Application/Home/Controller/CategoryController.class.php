<?php
namespace Home\Controller;
use Think\Controller;
use Home\Controller\BaseController;
class CategoryController extends BaseController {
    public function __construct()
    {
        $auth['title'] = '分类管理';
        $auth['class_name'] = __CLASS__;
        parent::__construct($auth);
    }
    /**
     * 分类列表
     */
    public function getList(){
        $limit = I('limit',10,'intval');
        $offset = I('offset',0,'intval');
        $count = M('category')->count();// 查询满足要求的总记录数
        $Page  = new \Think\Page($count,10);// 实例化分页类 传入总记录数和每页显示的记录数(25)
        $show  = $Page->show();// 分页显示输出
        $data = M('category')->order('id desc')->limit($Page->firstRow.','.$Page->listRows)->select();
        $res['status'] = 1;
        $res['list'] = $data;
        if(IS_AJAX)
        {
            $this->ajaxReturn($res);
        }else
        {
            $this->assign('page',$show);
            $this->assign('data',$data);
            $this->display();
        }
    }
    /**
     * 添加分类
     */
    public function addCate()
    {
        if(!IS_POST)
        {
            $this->display();
        }else
        {
            $data['title'] = I('post.title','trim');
            $res = M('category')->data($data)->add();
            if($res){
                $this->success('添加成功',U('category/getList'));exit;
            }else{
                $result['status'] = 2;
                $result['error'] = '添加失败';
                $this->error('添加失败');
            }
        }
    }
    /**
     * 修改分类
     */
    public function updateCate()
    {
        $id = I('get.id',0,'intval');
        $map['id'] = array('eq',$id);
        if(IS_POST)
        {
            $data['title'] = I('post.title','trim');
            $res = M('category')->where($map)->data($data)->save();
            if($res)
            {
                $this->success('修改成功',U('category/getList'));exit;
            }else{
                $this->error('修改失败');
            }
            $this->ajaxReturn($result);
            }
        $res = M('category')->where($map)->find();
        $this->assign('data',$res);
        $this->display();
    }
    /**
     * 删除分类
     */
    public function delCate()
    {
        $map['cate_id'] = I('get.id',0,'intval');
        $book = M('book')->where($map)->find();
        if($book)
        {
            $result['status'] = 2;
            $result['error'] = '该分类下有图书，不可删除';
            $this->error($result['error']);exit;
        }
        $res = M('category')->where(array('id'=>I('id')))->delete();
        if($res)
        {
            $this->success('删除成功');exit;
        }else{
            $result['status'] = 2;
            $result['error'] = '添加失败';
            $this->error('删除失败');
        }
    }
}