import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CalendarList, Agenda } from 'react-native-calendars'

function TrainingCalendar ({ selectedDate, onDayPress }) {
  return (
    <CalendarList
    // Enable horizontal scrolling, default = false
      horizontal={true}
    // Enable paging on horizontal, default = false
      pagingEnabled={true}
    // Set custom calendarWidth.
      calendarHeight={520}
    // Handler which gets executed on day press. Default = undefined
      onDayPress={onDayPress}
      markedDates={{ [selectedDate]: { selected: true } }}
    />
  )
}

const AgendaContainer = ({ onDayPress }) => {
  return (
    <Agenda
      renderEmptyData={() => (<View />)}
      onDayPress={onDayPress}
    />
  )
}

export default class App extends React.Component {
  constructor (props) {
    super(props)

    const d = new Date()
    this.state = {
      selectedDate: {
        month: d.getMonth() + 1,
        year: d.getFullYear()
      }
    }

  }

  _onDayPress = day => {
    this.setState({ selectedDate: day })
    console.log(day)
  }

  render () {
    // <TrainingCalendar onDayPress={this._onDayPress} selectedDate={'2018-05-01'} />
    const names = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const { month, year } = this.state.selectedDate
    const currentPeriod = `${names[month]} ${year}`

    return (
      <View style={styles.container}>
        <View style={{ height: 30 }} />
        <View style={{ alignItems: 'center', paddingBottom: 10 }}>
          <Text>{currentPeriod}</Text>
        </View>
        <AgendaContainer
          style={{ flex: 1 }}
          onDayPress={this._onDayPress}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
