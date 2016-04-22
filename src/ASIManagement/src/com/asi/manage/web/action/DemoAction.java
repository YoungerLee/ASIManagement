package com.asi.manage.web.action;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.asi.manage.domain.Demo;
import com.asi.manage.service.DemoService;

/**
 * @Controller("demoAction") 相当于spring容器中定义 <bean id="demoAction"
 *                           class="com.asi.manage.web.action.DemoAction"
 *                           scope="prototype">
 */
@Controller("demoAction")
@Scope(value = "prototype")
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
