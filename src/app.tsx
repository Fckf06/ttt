import { useEffect, useState } from 'react'

export const App = () => {
  const [height, setHeight] = useState('100%')
  const [translate, setTranslate] = useState('')

  const arr = []
  for (let i = 0; i <= 200; i++) arr.push('N-8 88 888 8888 88888') 

  useEffect(() => {
    let pendingUpdate = false;
    const viewportHandler = () => {
      if (pendingUpdate) return;
      pendingUpdate = true;
      requestAnimationFrame(() => {
        pendingUpdate = false;
        if (window.visualViewport && window.visualViewport.offsetTop >= 0) {
          setHeight(`${Math.max(0, window.visualViewport.height)}px`);
          setTranslate(
            `translateY(${Math.max(0, window.visualViewport.offsetTop)}px)`,
          );
          scroll(0, 0);
        }
      });
    };

    if (window.visualViewport && window.visualViewport.offsetTop >= 0) {
      window.visualViewport.addEventListener("scroll", viewportHandler);
      window.visualViewport.addEventListener("resize", viewportHandler);
    }

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("scroll", viewportHandler);
        window.visualViewport.removeEventListener("resize", viewportHandler);
        setHeight("100%");
        setTranslate("");
      }
    };
  }, [setHeight, setTranslate]);

  
  return (
      <section style={{height: height, transform: translate}} className='section'>
        <h2>Header</h2>
        <div className='wrapper'>
          <ol>
            {
              arr.map(li => (
                <li>{li}</li>
              ))
            }
          </ol>
        </div>
        <form className='form'>
          <input/>
        </form>
      </section>
  )
}
