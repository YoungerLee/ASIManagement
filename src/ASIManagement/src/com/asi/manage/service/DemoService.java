package com.asi.manage.service;

import com.asi.manage.domain.Demo;

public interface DemoService {
	public static final String SERVICE_NAME = "com.young.service.impl.DemoServiceImpl";

	void saveDemo(Demo demo);

	void delDemo(String id);

	Demo findDemoById(String id);

	void updateDemo(Demo demo);
}
