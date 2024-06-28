---
title: C++对象构造
date: 2024-04-28 18:03:14
tags: 
categories: C++
---
# 内存布局
``` bash
栈空间
堆空间
代码区
全局区
```
# malloc和new  申请堆空间内存
``` bash
char *Ptr = (char *)malloc(100 * sizeof(char));  //申请堆内存分配100个字节
free(Ptr);                      //释放堆空间

int* ptr = new int;        //申请空间并初始化
delete ptr;                 //释放堆空间   
Person *p = new person;   //在栈空间创建一个指针变量指向堆空间创建的对象的地址
delete  p;                  //释放堆空间   
```
# 全局区:成员变量自动初始化为0
# 结构体
``` bash
Struct Person{
	int m_age；
	int m_height
};
```
# 构造函数，对象创建时自动调用，通过malloc分配的对象不会调用构造函数
``` bash

Struct Person{
	int m_age；
	int m_height

Person(){
	int m_age=0;                //初始化  
	int m_height=0;          //初始化
	memset(this,0,sizeof(Person));       //全部初始化为0
	}
};
```


# 析构函数，对象销毁时自动调用，有且只有一个析构函数
``` bash
~Person（）{
}
```
