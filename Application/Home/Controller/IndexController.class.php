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
            $this->redirect('login/index');
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
        $this->assign('userinfo',session('userinfo'));
        $this->display();
    }
    public function left()
    {
        $this->display();
    }
    public function main()
    {
        /* 系统信息 */

        $sys_info['os']            = PHP_OS;

        $sys_info['ip']            = $_SERVER['SERVER_ADDR'];

        $sys_info['web_server']    = $_SERVER['SERVER_SOFTWARE'];

        $sys_info['php_ver']       = PHP_VERSION;

        $sys_info['mysql_ver']     = $mysql_ver;

        $sys_info['zlib']          = function_exists('gzclose') ? '是' : '否';

        $sys_info['safe_mode']     = (boolean) ini_get('safe_mode') ?  '是' : '否';

        $sys_info['safe_mode_gid'] = (boolean) ini_get('safe_mode_gid') ? '是' : '否';

        $sys_info['socket']        = function_exists('fsockopen') ? '是' : '否';

        $sys_info['post_max_size'] = get_cfg_var('post_max_size');
        $sys_info['date'] = date('Y-m-d H:i:s');
        $this->assign('sys_info', $sys_info);
        $this->display();
    }
}