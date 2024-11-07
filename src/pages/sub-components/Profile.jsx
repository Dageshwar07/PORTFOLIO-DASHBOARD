import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSelector } from "react-redux";
import { Textarea } from "@/components/ui/textarea";
import { Document, Page, pdfjs } from 'react-pdf';
import { Link } from "react-router-dom";

// Configure pdfjs worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageWidth, setPageWidth] = useState(300); // Set initial page width
  const originalWidth = 300; // Original width of the canvas
  const scale = 1; // Scale to reduce the size
  const height = 200; 

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Function to handle window resize for dynamic PDF scaling
  const updatePageWidth = () => {
    const width = window.innerWidth < 768 ? window.innerWidth - 30 : 300;
    setPageWidth(width);
  };

  React.useEffect(() => {
    updatePageWidth();
    window.addEventListener('resize', updatePageWidth);

    return () => {
      window.removeEventListener('resize', updatePageWidth);
    };
  }, []);

  return (
    <div className="container h-full px-6">
      <div className="flex flex-col w-full mx-auto ">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold py-4 text-center">
            {" "}
            Full Profile Preview
          </h1>
        </div>
        <div className="lg:flex gap-20 ">
          <div className="flex items-start py-6 lg:p-0  flex-col lg:flex-row gap-3">
            {/* Profile Image Section */}
            <div className="flex flex-col gap-5 h-full w-full">
              <Label>Profile Image</Label>
              <img
                src={user?.avatar?.url}
                alt="avatar"
                className="w-full h-auto lg:size-72 rounded-2xl"
              />
              {user?.resume?.url ? (
                <div className="grid gap-2 pdf  w-full sm:w-72">
                  <Label>Resume</Label>
                  <div className="w-full lg:size-72 border border-gray-350 rounded-2xl">
                    <Link to={user?.resume?.url} target="_blank">
                      <Document
                        key={user.resume.url} // Ensure unique key for the document
                        file={user.resume.url}
                        onLoadSuccess={onDocumentLoadSuccess}
                        loading={<div>Loading PDF...</div>}
                      >
                        <Page
                          pageNumber={pageNumber}
                          renderTextLayer={false}
                          renderAnnotationLayer={false}
                          width={originalWidth}
                          scale={scale}
                          className="pdf-page" // Use scale to control size
                        />
                      </Document>
                      <style className="lg:size-72" jsx>{`
                        .react-pdf__Page__canvas {
                           !important; /* Set desired height */
                          width: auto !important; /* Auto width to maintain aspect ratio */
                        }
                      `}</style>
                    </Link>
                  </div>
                </div>
              ) : (
                <div>No Resume Available</div>
              )}
            </div>

            {/* Resume Section */}
          </div>
          <div className="flex flex-col w-full gap-4">
            <div className="grid gap-2">
              <Label>Full Name</Label>
              <Input type="text" defaultValue={user.fullName} disabled />
            </div>
            <div className="grid gap-2">
              <Label>Email</Label>
              <Input type="email" defaultValue={user.email} disabled />
            </div>
            <div className="grid gap-2">
              <Label>Phone</Label>
              <Input type="text" defaultValue={user.phone} disabled />
            </div>

            <div className="grid gap-2">
              <Label>About Me</Label>
              <Textarea defaultValue={user.aboutMe} disabled />
            </div>
            <div className="grid gap-2">
              <Label>Portfolio URL</Label>
              <Input type="text" defaultValue={user.portfolioURL} disabled />
            </div>
            <div className="grid gap-2">
              <Label>Github URL</Label>
              <Input type="text" defaultValue={user.githubURL} disabled />
            </div>
            <div className="grid gap-2">
              <Label>LinkedIn URL</Label>
              <Input type="text" defaultValue={user.linkedInURL} disabled />
            </div>
            <div className="grid gap-2">
              <Label>Instagram URL</Label>
              <Input type="text" defaultValue={user.instagramURL} disabled />
            </div>
            <div className="grid gap-2">
              <Label>Twitter(X) URL</Label>
              <Input type="text" defaultValue={user.twitterURL} disabled />
            </div>
            <div className="grid gap-2">
              <Label>Facebook URL</Label>
              <Input type="text" defaultValue={user.facebookURL} disabled />
            </div>
          </div>

          {/* Other Profile Details */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
