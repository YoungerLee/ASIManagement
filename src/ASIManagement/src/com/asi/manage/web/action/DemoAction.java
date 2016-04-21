package com.asi.manage.web.action;

import javax.annotation.Resource;

import com.asi.manage.domain.Demo;
import com.asi.manage.service.DemoService;

@SuppressWarnings("serial")
public class DemoAction extends BaseAction<Demo> {
	private Demo demo = this.getModel();

	@Resource(name = DemoService.SERVICE_NAME)
	private DemoService demoService;

	public String saveDemo(Demo demo) {
		demoService.saveDemo(demo);
		return "success";
	}
}
