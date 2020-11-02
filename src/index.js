import './styles.css';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.setTimer = this.setTimer.bind(this);
  }
  setTimer() {
    let targetDate = this.targetDate;
    let selector = this.selector;
    const date = function () {
      let currentDay = Date.now();
      let time = targetDate.getTime() - currentDay;
      const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(2, '0');
      const hours = String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
      const mins = String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const secs = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, '0');
      
      const wrapper = document.querySelector(`${selector}`)
      wrapper.querySelector('[data-value="days"]').textContent = `${days}`;
      wrapper.querySelector('[data-value="hours"]').textContent = `${hours}`;
      wrapper.querySelector('[data-value="mins"]').textContent = `${mins}`;
      wrapper.querySelector('[data-value="secs"]').textContent = `${secs}`;
    }

    setInterval(date, 1000)
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2021'),
});;


timer.setTimer()
