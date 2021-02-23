import React, {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {fetchUsers} from '../redux/actions';

function userContainer({userData, fetchUsers}) {
  useEffect(() => {
    fetchUsers();
  }, []);
  return userData.loading ? (
    <ActivityIndicator />
  ) : userData.error ? (
    <Text> {userData.error}</Text>
  ) : (
    <View>
      <Text> USERS LIST </Text>
      <View>
        {userData &&
          userData.users &&
          userData.users.map((user) => <Text>{user.name}</Text>)}
      </View>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(userContainer);
