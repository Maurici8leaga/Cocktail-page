import s from "./style.module.css";

const Spinner = () => (
	<div className={s.container}>
		<div className={s.loading}>
			<div className={s.container_letters}>
				<span className={s.l}>L</span>
				<span className={s.o}>o</span>
				<span className={s.a}>a</span>
				<span className={s.d}>d</span>
				<span className={s.i}>i</span>
				<span className={s.n}>n</span>
				<span className={s.g}>g</span>
				<span className={s.d1}>.</span>
				<span className={s.d2}>.</span>
			</div>
			<div className={s.load}>
				<div className={s.progress}></div>
				<div className={s.progress}></div>
				<div className={s.progress}></div>
				<div className={s.progress}></div>
			</div>
		</div>
	</div>
);

export default Spinner;
