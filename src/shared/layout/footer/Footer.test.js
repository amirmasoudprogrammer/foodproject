import { render, screen } from "@testing-library/react";
import Footer from "@/shared/layout/footer/Footer";


test("Footer بدون خطا رندر می‌شود", () => {
    render(<Footer />);
});
