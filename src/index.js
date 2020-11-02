import './styles.css';

class timerPast {
  constructor({ selector, targetDate }){
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = this.getRefs();
    }

  start() {
    this.isActiv = setInterval(() => {
      const deltaTime = this.targetDate - Date.now();
      if (deltaTime > 0) {
        return this.updateClock(deltaTime);
      } else {
        this.stop();
      }
    }, 1000)
  }

  stop() {
    clearInterval(this.isActiv)
  }

  pad = function(value) {
   return String(value).padStart(2, '0')
  }
  
  updateClock(time) {
    const { spanDays, spanHours, spanMins, spanSecs } = this.refs;
    spanDays.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    spanHours.textContent = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    spanMins.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    spanSecs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  }

  getRefs() {
    const timerContainer = document.querySelector(this.selector);
    const spanDays = timerContainer.querySelector('[data-value="days"]');
    const spanHours = timerContainer.querySelector('[data-value="hours"]');
    const spanMins = timerContainer.querySelector('[data-value="mins"]');
    const spanSecs = timerContainer.querySelector('[data-value="secs"]');
    return {spanDays,spanHours,spanMins,spanSecs}
  }
}

const timer = new timerPast({
  selector: '#timer-1',
  targetDate: new Date('December 17, 2020, 15:26:04'),
});
timer.start();