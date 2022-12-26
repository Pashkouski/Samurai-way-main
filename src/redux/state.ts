export type messagesType = {
  message: string;
  id: number;
};
export type dialogsType = {
  name: string;
  id: number;
};
export type postDataType = {
  likesCount: number;
  message: string;
  id: number;
};
export type profilePageType = {
  postData: Array<postDataType>;
  newPostText: string;
};
export type messagesPageType = {
  newMessage: string;
  dialogs: Array<dialogsType>;
  messages: Array<messagesType>;
};
export type RootStateType = {
  profilePage: profilePageType;
  messagesPage: messagesPageType;
};

export type StoreType = {
  _state: RootStateType;
  addMessage: () => void;
  updateNewPostText: (newText: string) => void;
  addNewMessage: (newMessage: string) => void;
  addPost: () => void;
  _renderApp: (state: RootStateType) => void;
  subscribe: (observer: (state: RootStateType) => void) => void;
  getState: () => RootStateType;
};

export let store: StoreType = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hi, how are you", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 1 },
        { id: 2, message: "It's my first post", likesCount: 1 },
        { id: 2, message: "It's my first post", likesCount: 1 },
      ],
      newPostText: "",
    },

    messagesPage: {
      dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Sveta" },
        { id: 3, name: "Alex" },
        { id: 4, name: "Andrey" },
        { id: 5, name: "Andrey" },
      ],
      messages: [
        { id: 1, message: "hi" },
        { id: 2, message: "Hellow" },
        { id: 3, message: "yo" },
        { id: 4, message: "bye" },
        { id: 5, message: "yo" },
      ],
      newMessage: "",
    },
  },

  addPost() {
    const newPost: postDataType = {
      id: 6,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._renderApp(this._state);
  },
  updateNewPostText(newText: string) {
    this._state.profilePage.newPostText = newText;
    this._renderApp(this._state);
  },
  addMessage() {
    const newMessage: messagesType = {
      id: 6,
      message: this._state.messagesPage.newMessage,
    };
    this._state.messagesPage.messages.push(newMessage);
    this._state.messagesPage.newMessage = "";
    this._renderApp(this._state);
  },
  addNewMessage(newMessage: string) {
    this._state.messagesPage.newMessage = newMessage;
    this._renderApp(this._state);
  },
  _renderApp(props: RootStateType) {
    console.log("abc");
  },
  subscribe(observer) {
    this._renderApp = observer;
  },
  getState() {
    return this._state;
  },
};
// window.store = store
