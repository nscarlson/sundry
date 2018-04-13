import chineseSimplified from './chinese_simplified.json'
import chineseTraditional from './chinese_traditional.json'
import english from './english.json'
import french from './french.json'
import italian from './italian.json'
import japanese from './japanese.json'
import korean from './korean.json'
import spanish from './spanish.json'

const lists = {
    chineseSimplified,
    chineseTraditional,
    english,
    french,
    italian,
    japanese,
    korean,
    spanish,
}

const wordLists = (language) => lists[language] || english

export default wordLists
