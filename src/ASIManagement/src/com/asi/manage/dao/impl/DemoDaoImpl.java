package com.asi.manage.dao.impl;

import org.springframework.stereotype.Repository;

import com.asi.manage.dao.DemoDao;
import com.asi.manage.domain.Demo;

@Repository(DemoDao.SERVICE_NAME)
public class DemoDaoImpl extends CommonDaoImpl<Demo> implements DemoDao {

}
