const commands = [
	{
		id: 1,
		name: '?profile',
		content:
			'This command will show you your profile on league of legends including last match etc.',
	},
	{
		id: 2,
		name: '?help',
		content: 'This command will show you all the available commands',
	},
	{
		id: 3,
		name: '?setUser [username] [region]',
		content:
			' This command will add your username and region to the gremilin brain',
	},
	{
		id: 4,
		name: '?updateUser [new username] [new region]',
		content:
			'This command will update your username and region if they already exist.',
	},
	{
		id: 5,
		name: '?champion [champion name]',
		content:
			'This command will give you all the information you need to know about a champion.',
	},
	{
		id: 6,
		name: '?editme [border number]',
		content:
			'This command will put your profile picture on a league of legends border made by gremilin',
	},
	{
		id: 7,
		name: '?points',
		content: 'This command will show you how much gp(gremilin points) you have',
	},
	{
		id: 8,
		name: '?border',
		content: 'This command will show you all the available borders.',
	},
]
const search = document.querySelector('#search-command')
let timer = null
search.onkeydown = elm => {
	clearTimeout(timer)
	$('#commands-container').empty()
	timer = setTimeout(() => {
		const value = elm.target.value
		if (value.length <= 1) {
			$('#commands-container').empty()
			setAllCards()
		} else {
			commands.forEach(command => {
				const { name, content } = command
				const valg = new RegExp(value, 'gi')
				if (content.match(valg) || name.match(valg)) {
					const template = `
					<div class="card">
					<div class="head d-flex  align-items-center">
						<div class="avatar">
							<img src="./src/images/gremilin.jpg" alt="">
						</div>
						<div class="command">
							<span>${command.name}</span>
						</div>
				
					</div>
					<div class="content">
						<p>${command.content}</p>
					</div>
				</div>
					`
					$('#commands-container').append(template)
				}
			})
		}
	}, 1000)
}
function setAllCards() {
	commands.forEach(command => {
		const template = `
        <div class="card">
        <div class="head d-flex  align-items-center">
        <div class="avatar">
                <img src="./src/images/gremilin.jpg" alt="">
                </div>
            <div class="command">
                <span>${command.name}</span>
            </div>
    
            </div>
        <div class="content">
            <p>${command.content}</p>
        </div>
    </div>
    `
		$('#commands-container').append(template)
	})
}
setAllCards()
