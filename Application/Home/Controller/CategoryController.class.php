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
        $res['count'] = M('category')->limit($limit,$offset)->count();
        $data = M('category')->order('id desc')->limit($limit,$offset)->select();
        $res['status'] = 1;
        $res['list'] = $data;
        $this->ajaxReturn($res);
    }
    /**
     * 添加分类
     */
    public function addCate()
    {
        $data['title'] = I('post.title','trim');
        $res = M('category')->data($data)->add();
        if($res){
            $result['status'] = 1;
        }else{
            $result['status'] = 2;
            $result['error'] = '添加失败';
        }
        $this->ajaxReturn($result);
    }
    /**
     * 修改分类
     */
    public function updateCate()
    {
        $id = I('id',0,'intval');
        $map['id'] = array('eq',$id);
        if(IS_POST)
        {
            $data['title'] = I('post.title','trim');
            $res = M('category')->where($map)->data($data)->save();
            if($res)
            {
                $result['status'] = 1;
            }else{
                $result['status'] = 2;
                $result['error'] = '添加失败';
            }
            $this->ajaxReturn($result);
            }
        $res = M('category')->where($map)->find();
        $this->ajaxReturn($res);
    }
    /**
     * 删除分类
     */
    public function delCate()
    {
        $res = M('category')->where(array('id'=>I('id')))->delete();
        if($res)
        {
            $result['status'] = 1;
        }else{
            $result['status'] = 2;
            $result['error'] = '添加失败';
        }
        $this->ajaxReturn($result);
    }
}