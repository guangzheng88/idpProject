<?php
namespace Home\Controller;
use Think\Controller;
use Home\Controller\BaseController;
class AdminController extends BaseController {
    public function index(){
        $this->display();
    }
}