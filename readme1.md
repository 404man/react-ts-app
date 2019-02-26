
js 路由跳转

组件的 style 不要继承和复用， 各自写各自的

create-react-app myapp --scripts-version=react-scripts-ts@4.0.8 才支持scss

scss 减号要空格 否则是负号；


***********************************************
{
  "id": "123",
  "author": {
    "id": "1",
    "name": "Paul"
  },
  "title": "My awesome blog post",
  "comments": [
    {
      "id": "324",
      "commenter": {
        "id": "2",
        "name": "Nicole"
      }
    }
  ]
}

// Define a users schema
const user = new schema.Entity('users');

// Define your comments schema , 第二个参数是 schema 的定义
const comment = new schema.Entity('comments', {
  commenter: user
});

// Define your article
const article = new schema.Entity('articles', {
  author: user,
  comments: [comment]
});

const normalizedData = normalize(originalData, article);

结果 article 和原数据 对号入座，生成各个 schema

{
  result: "123",
  entities: {
    "articles": {
      "123": {
        id: "123",
        author: "1",
        title: "My awesome blog post",
        comments: [ "324" ]
      }
    },
    "users": {
      "1": { "id": "1", "name": "Paul" },
      "2": { "id": "2", "name": "Nicole" }
    },
    "comments": {
      "324": { id: "324", "commenter": "2" }
    }
  }
}
***********************************************************
class App extends Component<IProps, IState> {
    static defaultProps = {
        // ...
    }
    
    readonly state = {
        // ...
    }; 
    // 小技巧：如果state很复杂不想一个个都初始化，可以结合类型断言初始化state为空对象或者只包含少数必须的值的对象：  readonly state = {} as IState;
}

需要特别强调的是，如果用到了state，除了在声明组件时通过泛型参数传递其state结构，还需要在初始化state时声明为 readonly

***************************
设置默认值
public static defaultProps: Partial<Persion> = {
  name: "liu"
}
******************
 reselect   可以多层嵌套 取值，最后只需要传入一个state
  createSelector () 生成一个函数，调用时传入state
********************************************