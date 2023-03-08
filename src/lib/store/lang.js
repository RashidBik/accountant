import { writable } from 'svelte/store';

export const En = {
	load: 'Loading...',
	home: {
		avatar: 'Earn More Spend More',
		chart: ['Income', 'Expens']
	},
	reports: {
		bar: ['Today', 'Month', 'Year', 'All'],
		calc: ['Income', 'Expens', 'Profit']
	},
	groups: ['Income', 'Expens'],
	header: ['Search', 'Setting'],
	footer: ['Group', 'Report', 'Home'],
	setting: [
		'Setting',
		'ٔNew Account',
		'Logout',
		'Account',
		'Profile',
		'Language',
		'About',
		'Theme'
	],
	register: [
		'SIGN UP',
		'Insert Your Name',
		'What Is Your Job',
		'exapmle@mail.com',
		'Insert A Password',
		'Register'
	],
	login: ['SIGN IN', 'Enter Your Email', 'Enter Your Password'],
	theme: ['Select Theme']
	// insert: ['Insert Your Data', 'Insert Amount', '']
	///////TODO............
};

export const Fa = {
	home: {
		avatar: 'بیشتر درامد کن تا بیشتر خرج کنی',
		chart: ['دخل', 'خرج']
	},
	reports: {
		bar: ['امروز', 'ماه', 'سال', 'همه'],
		calc: ['دخل', 'خرج', 'سود']
	},
	groups: ['دخل', 'خرج'],
	header: ['جستجو', 'تنظیمات'],
	footer: ['گروپ', 'گزارش', 'خانه'],
	setting: ['تنظیمات', 'حساب جدید', 'خروج', 'حساب', 'پروفایل', 'زبان', 'درباره', 'رنگ آمیزی'],
	register: [
		'ثبت نام',
		' نام خود را وارد کنید',
		'شغل تان چیست',
		'ایمیل خود را وارد کنید',
		'رمز عبور را وارد کنید',
		'ثبت نام'
	],
	login: ['ورود', ' ایمیل خود را تایید کنید', 'رمز عبورتان را وارد کنید'],
	theme: ['انتخاب رنگ قالب']
	///////TODO............
};

export const lang = writable(En);
