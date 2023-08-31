const express=require('express');
const router=express.Router();
const app=new express();

const democontroller=require('../controllers/demoController');

router.get('/',democontroller.demo);

module.exports=router;