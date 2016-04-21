package com.asi.manage.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.asi.manage.dao.DemoDao;
import com.asi.manage.domain.Demo;
import com.asi.manage.service.DemoService;

@Service(DemoService.SERVICE_NAME)
@Transactional(readOnly = true)
public class DemoServiceImpl implements DemoService {
	@Resource(name = DemoDao.SERVICE_NAME)
	DemoDao demoDao;

	@Override
	@Transactional(isolation = Isolation.DEFAULT, propagation = Propagation.REQUIRED, readOnly = false)
	public void saveDemo(Demo demo) {
		demoDao.save(demo);
	}

	@Override
	public void delDemo(String id) {
		String[] ids = { id };
		demoDao.deleteObjectByIds(ids);
	}

	@Override
	public Demo findDemoById(String id) {
		return (Demo) demoDao.findObjectByID(id);
	}

	@Override
	@Transactional(isolation = Isolation.DEFAULT, propagation = Propagation.REQUIRED, readOnly = false)
	public void updateDemo(Demo demo) {
		demoDao.update(demo);
	}
}
