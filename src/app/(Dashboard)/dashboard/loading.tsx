import styles from "@/app/style/loadingDrop.module.css";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-full">
      <div className={styles.loadingWrapper}>
        <div className={styles.childLoading}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
