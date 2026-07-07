// PDF.js 초기화
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

// PDF 보기 함수
function viewPDF(pdfPath) {
    // PDF 컨테이너 요소 가져오기
    const container = document.getElementById('pdfContainer');

    // PDF 파일 로드
    const loadingTask = pdfjsLib.getDocument(pdfPath);

    // PDF 렌더링
    loadingTask.promise.then(pdf => {
        // 첫 번째 페이지 렌더링
        pdf.getPage(1).then(page => {
            const scale = 1.5;
            const viewport = page.getViewport({ scale });
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            container.innerHTML = ''; // 컨테이너 초기화
            container.appendChild(canvas);

            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            page.render(renderContext);
        });
    }).catch(error => {
        console.error('PDF 뷰어를 로드하는 도중 오류가 발생했습니다:', error);
    });
}