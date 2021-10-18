/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Rankcount from './src/rankcount';
import LottoCount from './src/lottocount';
import BtnCount from './src/btncount';
import ResultView from './src/resultview';

class App extends Component {
  state = {
    lottoNum: [15, 10, 14, 35, 42, 37],
    bonusNum: 18,
    selectNumArr: [],
    rank1: 0,
    rank2: 0,
    rank3: 0,
    rank4: 0,
    rank5: 0,
    lottoCount: 0,
    money: 0,
  };

  lottoRandomNum = num => {
    // 5회 10회 50회 받아와야 되기 ........
    for (let n = 0; n < num; n++) {
      let randomNums = [];
      let rankCounts = 0;

      // 6개의 랜덤 숫자를 담을 1차 배열
      for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * 45) + 1;

        // 중복 비교를 위한 for문 - j가 randomNums에 담긴 배열과 같을 경우 랜덤 한 번 더 돌리는
        for (let j in randomNums) {
          if (num === randomNums[j]) {
            //현재 나온 숫자가 기존 rnadomNums에 담긴 숫자과 같을경우
            num = Math.floor(Math.random() * 45) + 1;
          }
        }
        randomNums.push(num);
      }
      //오름차순 정렬
      randomNums.sort((a, b) => {
        return a - b;
      });

      //랜덤한 숫자를 state에 선언해둔 selectNumArr로 넘겨준다
      this.setState({
        selectNumArr: randomNums,
      });

      //추첨횟수 카운트 prevState(이전의 state)값을 받아와 +1
      this.setState(prevState => {
        return {
          lottoCount: prevState.lottoCount + 1,
          money: prevState.money + 1000,
        };
      });

      // 당첨에 대하여.....
      for (let i = 0; i < 6; i++) {
        // 중복 비교를 위한 for문 - j가 randomNums에 담긴 배열과 같을 경우.. +1개.. 6개까지
        for (let j in randomNums) {
          if (this.state.lottoNum[i] === randomNums[j]) {
            rankCounts = rankCounts + 1;
          }
        }
      }

      if (rankCounts === 6) {
        this.setState(prevState => {
          return {
            rank1: prevState.rank1 + 1,
          };
        });
      } else if (rankCounts === 5) {
        for (let i = 0; i < 6; i++) {
          // 보너스 숫자와 비교
          for (let j in randomNums) {
            if (this.state.bonusNum === randomNums[j]) {
              this.setState(prevState => {
                return {
                  rank2: prevState.rank2 + 1,
                };
              });
            } else {
              this.setState(prevState => {
                return {
                  rank3: prevState.rank3 + 1,
                };
              });
            }
          } // for
        } // else(randkcount ===5)
      } else if (rankCounts === 4) {
        this.setState(prevState => {
          return {
            rank4: prevState.rank4 + 1,
          };
        });
      } else if (rankCounts === 3) {
        this.setState(prevState => {
          return {
            rank5: prevState.rank5 + 1,
          };
        });
      }
    } // 최상단 포문 닫는 괄호
  }; // end lottoRandomNum

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.subView}>
          <Text
            style={styles.mainText}>{`당첨 번호: ${this.state.lottoNum}`}</Text>
          <Text
            style={styles.mainText}>{`보너스: ${this.state.bonusNum}`}</Text>
        </View>
        <Rankcount
          rank1={this.state.rank1}
          rank2={this.state.rank2}
          rank3={this.state.rank3}
          rank4={this.state.rank4}
          rank5={this.state.rank5}
        />
        <LottoCount
          lottoCount={this.state.lottoCount}
          money={this.state.money}
        />
        <BtnCount selectNum={this.lottoRandomNum} />
        <ResultView
          selectNum={this.lottoRandomNum}
          lottoCount={this.state.lottoCount}
          selectNumArr={this.state.selectNumArr}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    paddingTop: 70,
  },
  subView: {
    padding: 20,
    backgroundColor: '#eaeaea',
    marginBottom: 10,
  },
  mainText: {
    fontSize: 18,
  },
});

export default App;
