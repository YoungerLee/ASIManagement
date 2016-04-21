package com.asi.manage.web.action;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.ServletResponseAware;
import org.apache.struts2.util.ServletContextAware;

import com.asi.manage.utils.TransUtil;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

public class BaseAction<T> extends ActionSupport implements ModelDriven<T>,
		ServletRequestAware, ServletResponseAware, ServletContextAware {

	T entity;

	protected HttpServletRequest request;
	protected HttpServletResponse response;
	protected ServletContext context;

	// T型实例化
	public BaseAction() {
		/** T型转换 */
		Class entityClass = TransUtil.getActualType(this.getClass());
		try {
			entity = (T) entityClass.newInstance();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public T getModel() {
		return entity;
	}

	public void setServletResponse(HttpServletResponse res) {
		this.response = res;
	}

	public void setServletRequest(HttpServletRequest req) {
		this.request = req;
	}

	public void setServletContext(ServletContext context) {
		this.context = context;
	}
}
