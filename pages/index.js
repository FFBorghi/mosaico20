import Head from 'next/head'

export default function Home() {
  return (
	  <html>
	  	<head>
			<title>Mosaico IF 2020</title>
		</head>
		<header>
	  		<nav className={styles.navbar}>
				<div className={styles.navbar-container}>
					<div className={styles.logo}>
						<a href="mosaico.html" className={styles.logo-link}>
							<img src="/logo_mosaico4.png" alt="Logo do Mosaico" className={styles.imglogo} />
							<ul className={styles.logodesc}>
								<li>Mosaico 2020</li>
							</ul>
						</a>
					</div>
					<div>
						<ul className={styles.navigation}>
							<li><a href="mosaico.html#sobre">Sobre</a></li>
							<li><a href="mosaico.html#evento">Evento</a></li>
							<li><a href="mosaico.html#programacao">Programação</a></li>
							<li><a href="resumos.html#resumos">Resumos</a></li>
							<li><a href="mosaico.html#evento">Inscrição</a></li>
							<li><a href="mosaico.html#organizacao">Organização</a></li>
						</ul>
					</div>
				</div>
			</nav>
			<div className={styles.banner-text}>
				<h1>MOSAICO IF<br />2020</h1>
			</div>
		</header>
	  </html>
	)
}
