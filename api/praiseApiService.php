<?php
class CommonDAO {
	public $servername;
	public $username;
	public $password;
	public $dbname;
	public $con = '';
	public function __construct($servername, $username, $password, $dbname) {
		$this->servername = $servername;
		$this->username   = $username;
		$this->password   = $password;
		$this->dbname     = $dbname;
	}
	public function getConnection() {
		try {
			$dsn = "mysql:host=$this->servername;dbname=$this->dbname";

			$this->con = new PDO($dsn, $this->username, $this->password);
		}
		 catch (PDOException $e) {
			echo $e->getMessage();
		}
	}

	public function updateData($sql) {

		if ($this->con == null) {//如果没有连接，则重新连接

			$this->getConnection();
		}
		//设置报头
		header("Content-type: text/html; charset=utf-8");

		$res = $this->con->exec($sql);

		$arr = array('result' => $res);

		echo json_encode($arr);

		$this->closeCon();
	}
	public function closeCon() {

		$this->con = null;

	}
}

class PraiseDAO extends CommonDAO {

	public function __construct($servername, $username, $password, $dbname) {

		parent::__construct($servername, $username, $password, $dbname);

	}
}
$praiseC = new PraiseDAO('localhost', 'root', '', 'test');

$sql = "UPDATE PRAISE_COUNT SET NUM = NUM+1 WHERE ID = 1";

$praiseC->updateData($sql);

?>