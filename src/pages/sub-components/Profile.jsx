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
  const [pageWidth, setPageWidth] = useState(350); // Set initial page width

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
    <div className="w-full h-full">
      <div>
        <div className="grid w-[100%] gap-6">
          <div className="grid gap-2">
            <h1 className="text-3xl font-bold">Profile</h1>
            <p className="text-muted-foreground">Full Profile Preview</p>
          </div>
          <div className="grid gap-4">
            <div className="flex items-start lg:justify-between lg:items-center flex-col lg:flex-row gap-5">
              {/* Profile Image Section */}
              <div className="grid gap-2 w-full sm:w-72">
                <Label>Profile Image</Label>
                <img
                  src={user?.avatar?.url}
                  alt="avatar"
                  className="w-full h-auto sm:w-72 sm:h-72 rounded-2xl"
                />
              </div>

              {/* Resume Section */}
              {user?.resume?.url ? (
                <div className="grid gap-2 pdf  w-full sm:w-72">
                  <Label>Resume</Label>
                  <div className="w-full sm:w-72 sm:h-auto border border-gray-300 rounded-2xl">
                    <Link
                      to={user?.resume?.url}
                      target="_blank"
                    >
                      <Document
                        key={user.resume.url} // Ensure unique key for the document
                        file={user.resume.url}
                        onLoadSuccess={onDocumentLoadSuccess}
                        loading={<div>Loading PDF...</div>}
                        renderAnnotationLayer={false}
     

                      >
                       
               
                        <Page 
                          pageNumber={pageNumber}
                          width={pageWidth}  // Set the dynamic width of the PDF
                          scale={1}          // Adjust scale if needed
                        />
                      </Document>
                    </Link>
                  </div>
                </div>
              ) : (
                <div>No Resume Available</div>
              )}
            </div>

            {/* Other Profile Details */}
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
