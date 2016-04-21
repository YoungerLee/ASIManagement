package com.asi.manage.domain;

import java.io.Serializable;

public class Demo implements Serializable {
	private String id;
	private String demo;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDemo() {
		return demo;
	}

	public void setDemo(String demo) {
		this.demo = demo;
	}
}
