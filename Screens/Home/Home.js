import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Pressable,
    FlatList,
  } from 'react-native';
  import React, {useState} from 'react';
  import Title from '../../Components/Title/Title';
  import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
  import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
  import UserStory from '../../Components/UserStory/UserStory';
  import UserPost from '../../Components/UserPost/UserPost';
  import style from './style';
  import globalStyle from '../../assets/styles/main';
  import { Route } from '../../navigation/Route';
  const Home = () => {
    const data = [
      {
        firstName: 'Jothika',
        id: 1,
      },
      {
        firstName: 'Yasika',
        id: 2,
      },
      {
        firstName: 'Vasanth',
        id: 3,
      },
      {
        firstName: 'Kowslya',
        id: 4,
      },
      {
        firstName: 'Hasini',
        id: 5,
      },
      {
        firstName: 'Yazhili',
        id: 6,
      },
      {
        firstName: 'Rathi',
        id: 7,
      },
      {
        firstName: 'Jeyanthi',
        id: 8,
      },
      {
        firstName: 'Priya',
        id: 9,
      },
    ];
    const posts = [
      {
        firstName: 'Jothika',
        lastName: 'vazhivittan',
        location: 'chennai',
        likes: 1200,
        comments: 30,
        bookmarks: 60,
        id: 1,
      },
      {
        firstName: 'Muthu',
        lastName: 'Kumar',
        location: 'Ramanathapuram',
        likes: 2300,
        comments: 45,
        bookmarks: 120,
        id: 2,
      },
      {
        firstName: 'Dhamaya',
        lastName: 'Dinesh',
        location: 'Singapore',
        likes: 680,
        comments: 20022,
        bookmarks: 1020,
        id: 3,
      },
      {
        firstName: 'Yasika',
        lastName: 'Kapil',
        location: 'America',
        likes: 1020,
        comments: 990,
        bookmarks: 87,
        id: 4,
      },
      {
        firstName: 'Vasanth',
        lastName: 'Kumar',
        location: 'Bangalore',
        likes: 2800,
        comments: 159,
        bookmarks: 80,
        id: 5,
      },
    ];
    const pageSize = 4;
    const pageSizePost = 2;
    const [pageNumber, setPageNumber] = useState(1);
    const [PostpageNumber, setPostPageNumber] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingPosts, setIsLoadingPosts] = useState(false);
    const [renderData, setRenderData] = useState(data.slice(0, pageSize));
    const [renderDataPosts, setRenderDataPosts] = useState(
      posts.slice(0, pageSizePost),
    );
  
    const pagination = (data, pageNumber, pageSize, posts = false) => {
      let startIndex = (pageNumber - 1) * pageSize;
      console.log(startIndex, renderData.length);
      if (startIndex > data.length) {
        return [];
      }
      if (!posts) {
        setPageNumber(pageNumber);
      } else {
        setPostPageNumber(pageNumber);
      }
      return data.slice(startIndex, startIndex + pageSize);
    };
  
    return (
      <SafeAreaView style={globalStyle.backgroundwhite}>
         <FlatList
            ListHeaderComponent={
              <>
              <View style={style.header}>
            <Title title={'Instagram'} />
            <Pressable style={style.messageIcon}>
              <FontAwesomeIcon icon={faEnvelope} color={'#CACDDE'} size={20} />
              <View style={style.messageNumberContainer}>
                <Text style={style.messageNumber}>3</Text>
              </View>
            </Pressable>
          </View>
          <View style={style.userStoryContainer}>
            <FlatList
              onMomentumScrollBegin={() => setIsLoading(false)}
              onEndReachedThreshold={0.5}
              keyExtractor={item => item.id.toString()}
              onEndReached={() => {
                if (!isLoading) {
                  setIsLoading(true);
                  setRenderData(prev => [
                    ...prev,
                    ...pagination(data, pageNumber + 1, pageSize),
                  ]);
                  setIsLoading(false);
                }
              }}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={renderData}
              renderItem={({item}) => <UserStory firstName={item.firstName} />}
            />
          </View>
       </>
              
          }
              onMomentumScrollBegin={() => setIsLoadingPosts(false)}
              onEndReachedThreshold={0.5}
              keyExtractor={(item) => item.id.toString() + 'post'}
              onEndReached={() => {
                if (!isLoadingPosts) {
                  setIsLoadingPosts(true);
                  setRenderDataPosts(prev => [
                    ...prev,
                    ...pagination(posts, PostpageNumber + 1, pageSizePost, true),
                  ]);
                  setIsLoadingPosts(false);
                }
              }}
              showsVerticalScrollIndicator={false}
              data={renderDataPosts}
              renderItem={({item}) => (
                 <View style={style.userPostContainers}>
           <UserPost
                  firstName={item.firstName}
                  lastName={item.lastName}
                  comments={item.comments}
                  likes={item.likes}
                  bookmarks={item.bookmarks}
                  location={item.location}
                />
                 </View> 
           )}
              />
         </SafeAreaView>
    );
  };
  
  export default Home;
  
  const styles = StyleSheet.create({});
  