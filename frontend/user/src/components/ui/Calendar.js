import React, { PureComponent } from 'react';
import moment from 'moment';
import Icon from './Icon';

class Calendar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      format: 'YYYY-MM-DD',
      today: moment(),
      standardDate: moment(),
      selectedDay: '',
    };
  }

  yearMonth = () => {
    const { state } = this;
    const year = state.standardDate.format('Y');
    const month = state.standardDate.format('MM');
    return `${year}년 ${month}월`;
  };

  MonthList = () => {
    const { state } = this;
    const data = this.props;
    const calorieStatusList = data.calorieStatus;
    const calendar = [];
    const standardDate = state.standardDate.clone();
    let startWeek = standardDate.startOf('month').isoWeek();
    let endWeek = standardDate.endOf('month').isoWeek();
    startWeek = [52, 53].includes(startWeek) ? 0 : startWeek;
    endWeek = endWeek === 1 ? 53 : endWeek;

    for (let week = startWeek; week <= endWeek; week += 1) {
      const calendarArr = Array(7)
        .fill(0)
        .map((n, i) => {
          const current = standardDate
            .clone()
            .isoWeek(week)
            .startOf('isoWeek')
            .add(n + i, 'day');
          const currentFormat = current.format(state.format);
          const isGrayed = standardDate.format('MM') !== current.format('MM');
          const isToday =
            state.today.format(state.format) === current.format(state.format) &&
            !isGrayed;
          let todayBefore = '';
          if (calorieStatusList && current < state.today && !isGrayed) {
            todayBefore = 'calendar__day--today-before';
          }
          let calorieState = '';
          const calorieStatusData = calorieStatusList
            ? calorieStatusList[currentFormat]
            : '';
          if (calorieStatusData && !isGrayed) {
            calorieState = `calendar__day--${
              calorieStatusData.status === 'keep' ? 'keep' : 'out'
            }`;
          }
          return {
            current: currentFormat,
            currentDay: current.format('D'),
            todayBefore,
            isGrayed,
            isToday,
            calorieState,
          };
        });
      calendar.push(calendarArr);
    }
    return (
      <article className="calendar__days">
        {calendar.map((days, i) => (
          <ul key={i.toString()}>
            {days.map((day, di) => (
              <li key={di.toString()}>
                <span
                  className={`calendar__day ${day.calorieState} ${
                    day.todayBefore
                  } ${day.isToday ? 'calendar__day--today' : ''}`}
                  onClick={(e) => {
                    this.onDayClick(e, day);
                  }}
                  role="presentation"
                >
                  {day.isGrayed ? '' : day.currentDay}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </article>
    );
  };

  onNext = () => {
    const { state } = this;
    const date = state.standardDate.clone().add(1, 'month');
    this.setState({
      standardDate: date,
    });
  };

  onPrev = () => {
    const { state } = this;
    const date = state.standardDate.clone().subtract(1, 'month').endOf('month');
    this.setState({
      standardDate: date,
    });
  };

  onDayClick = (e, d) => {
    this.setState({
      selectedDay: d.current,
    });
    const data = this.props;
    data.onCreate(d.current);
  };

  render() {
    const { state } = this;
    const dayNames = ['월', '화', '수', '목', '금', '토', '일'];
    console.log(state.selectedDay);
    return (
      <div className="calendar">
        <div className="calendar__header">
          <span
            onClick={() => this.onPrev()}
            className="calendar__prev"
            role="presentation"
          >
            <Icon size={13} content="arrow-left" fill="#ccc" />
          </span>
          <p>{this.yearMonth()}</p>
          <span
            onClick={() => this.onNext()}
            className="calendar__next"
            role="presentation"
          >
            <Icon size={13} content="arrow-right" fill="#ccc" />
          </span>
        </div>
        <div className="calendar__body">
          <article className="calendar__week">
            <ul>
              {dayNames.map((day, i) => (
                <li key={i.toString()}>
                  <span>{day}</span>
                </li>
              ))}
            </ul>
          </article>
          <this.MonthList />
        </div>
        <div className="calendar__footer">
          <span className="calendar__label keep">제안 칼로리 지킨 날</span>
          <span className="calendar__label">제안 칼로리 지키지 못한 날</span>
        </div>
      </div>
    );
  }
}

export default Calendar;
