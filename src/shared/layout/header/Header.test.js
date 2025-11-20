import { render, screen } from "@testing-library/react";
import Header from "@/shared/layout/header/Header";


test("Header بدون خطا رندر می‌شود", () => {
    render(<Header />);
});
