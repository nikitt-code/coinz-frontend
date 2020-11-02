import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Button, PanelHeader, Placeholder } from '@vkontakte/vkui';
import { PanelHeaderBack } from '@vkontakte/vkui';

import Icon56GhostOutline from '@vkontakte/icons/dist/56/ghost_outline';

const Profile = ({ id, go, fetchedUser }) => (
	<Panel id={id}>

		<PanelHeader left={<PanelHeaderBack onClick={go} data-to="home"/>} >Профиль</PanelHeader>

        <Placeholder
            icon={<Icon56GhostOutline />}
            action={<Button size="l" mode="tertiary" onClick={go} data-to="home">Вернуться назад</Button>}
            stretched
        >
            Профиль не доступен. Он появится после завершения первого блока майнинга.<br />сообщений
        </Placeholder>

	</Panel>
);

Profile.propTypes = {
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

export default Profile;
