// Singleton

const Logger = {
  printOnConsole: ({ log, color = 'red'}) => {
    console.log(`%c ${log}`, `color: ${color}`)
  },
  appendLog: ({ log, color }) => {
    const element = document.getElementById('singleton')
    const div = document.createElement('div')
    div.style = `color: ${color}`
    div.innerText = log
    element.append(div)
  }
}