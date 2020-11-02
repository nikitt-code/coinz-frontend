import React from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';
import { Panel, List, Button, Group, Div, PanelHeader, PanelHeaderButton, Card, CardGrid, Cell, Title, Text } from '@vkontakte/vkui';

import Icon28UserCircleFillBlue from '@vkontakte/icons/dist/28/user_circle_fill_blue';
import Icon28MessageCircleFillGreen from '@vkontakte/icons/dist/28/message_circle_fill_green';
import Icon28GiftCircleFillRed from '@vkontakte/icons/dist/28/gift_circle_fill_red';
import Icon28VotesTransferCircleFillTurquoise from '@vkontakte/icons/dist/28/votes_transfer_circle_fill_turquoise';
import Icon32Videos from '@vkontakte/icons/dist/32/videos';
import Icon28LocationOutline from '@vkontakte/icons/dist/28/location_outline';

const Home = ({ id, go, ads }) => (
	<Panel id={id}>

		<PanelHeader left={<PanelHeaderButton href="/"><Icon28VotesTransferCircleFillTurquoise /></PanelHeaderButton>}>
				CoinZ
		</PanelHeader>

		<Group separator="hide">
      <CardGrid>
        <Card size="l">
					<Div>
						<center><Title weight="bold" style={{ marginBottom:1, fontSize: 35 }}>0.001</Title></center>
						<center><Text weight="regular" style={{ margin: 5, marginBottom:15, color: "#a8a8a8" }}>+0.001 за просмотр</Text></center>
			    	<Button size="xl" expandable before={<Icon32Videos />} onClick={ads}>Просмотреть рекламу</Button>
			    </Div>
        </Card>
      </CardGrid>
    </Group>

		<Group>
      <List>
        <Cell expandable before={<Icon28UserCircleFillBlue />} onClick={go} data-to="profile">Учетная запись</Cell>
		<Cell expandable before={<Icon28LocationOutline />}>Перевод</Cell>
        <Cell expandable before={<Icon28GiftCircleFillRed />} onClick={go} data-to="gifts">Подарки</Cell>
        <Cell expandable before={<Icon28MessageCircleFillGreen />} href="https://vk.me/join/AJQ1d6xghRlnHC29maIt27cR" target="_blank">Чат</Cell>
      </List>
    </Group>

	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
