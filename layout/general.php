<?php

$hasheading = ($PAGE->heading);
$hasnavbar = (empty($PAGE->layout_options['nonavbar']) && $PAGE->has_navbar());
$hasfooter = (empty($PAGE->layout_options['nofooter']));
$hassidepre = (empty($PAGE->layout_options['noblocks']) && $PAGE->blocks->region_has_content('side-pre', $OUTPUT));
$hassidepost = (empty($PAGE->layout_options['noblocks']) && $PAGE->blocks->region_has_content('side-post', $OUTPUT));
$haslogininfo = (empty($PAGE->layout_options['nologininfo']));

$showsidepre = ($hassidepre && !$PAGE->blocks->region_completely_docked('side-pre', $OUTPUT));
$showsidepost = ($hassidepost && !$PAGE->blocks->region_completely_docked('side-post', $OUTPUT));

$custommenu = $OUTPUT->custom_menu();
$hascustommenu = (empty($PAGE->layout_options['nocustommenu']) && !empty($custommenu));

$bodyclasses = array();
if ($showsidepre && !$showsidepost) {
    $bodyclasses[] = 'side-pre-only';
} else if ($showsidepost && !$showsidepre) {
    $bodyclasses[] = 'side-post-only';
} else if (!$showsidepost && !$showsidepre) {
    $bodyclasses[] = 'content-only';
}
if ($hascustommenu) {
    $bodyclasses[] = 'has_custom_menu';
}

echo $OUTPUT->doctype() ?>
<html <?php echo $OUTPUT->htmlattributes() ?>>
<head>
    <title><?php echo $PAGE->title ?></title>
    <link rel="shortcut icon" href="<?php echo $OUTPUT->pix_url('favicon', 'theme')?>" />

	<?php 
		$PAGE->requires->js('/theme/brg4/javascript/base.js',false);
		
		if ($PAGE->bodyid == 'page-login-index') {  // Login Seite
			$PAGE->requires->js('/theme/brg4/javascript/loginInsertUserName.js',false);
		}
		else {
			$PAGE->requires->js('/theme/brg4/javascript/logonAccessKeys.js',false);
			$PAGE->requires->js('/theme/brg4/javascript/replaceViewProfileLink.js',false);
			$PAGE->requires->js('/theme/brg4/javascript/markDownAsDefaultTextAreaInputFormat.js',false);
		}
		if ($PAGE->bodyid == 'page-course-view-topics') { // Kursseite
			$PAGE->requires->js('/theme/brg4/javascript/editAccessKeys.js',false);
			$PAGE->requires->js('/theme/brg4/javascript/jumpToCurrentTopic.js',false);
		} 
		else if ($PAGE->bodyid == 'page-course-edit') {   // Neuen Kurs anlegen
			$PAGE->requires->js('/theme/brg4/javascript/Array.map.js',false);
			$PAGE->requires->js('/theme/brg4/javascript/String.trim.js',false);
			$PAGE->requires->js('/theme/brg4/javascript/schuljahr.js',false);
			$PAGE->requires->js('/theme/brg4/javascript/dom.js',false);
			$PAGE->requires->js('/theme/brg4/javascript/neuenKursAnlegen.js',false);
		} 
		else if ($PAGE->bodyid == 'page-course-editcategory') { // Neue Kurskategorie anlegen
			$PAGE->requires->js('/theme/brg4/javascript/String.trim.js',false);
			$PAGE->requires->js('/theme/brg4/javascript/schuljahr.js',false);
			$PAGE->requires->js('/theme/brg4/javascript/dom.js',false);
			$PAGE->requires->js('/theme/brg4/javascript/kursbereichAnlegen.js',false);
		} 
		else if ($PAGE->bodyid == 'page-site-index') {  // frontpage
			$PAGE->requires->js('/theme/brg4/javascript/collapseOldCourseCategories.js',false);
		} 
		else if ($PAGE->bodyid == 'page-course-editsection') {  // edit course section properties
			$PAGE->requires->js('/theme/brg4/javascript/customSectionName.js',false);
		} 
		else if ($PAGE->bodyid == 'page-course-request') {  // edit course section properties
			$PAGE->requires->js('/theme/brg4/javascript/courseRequest.js',false);
		} 
		else if ($PAGE->bodyid == 'page-mod-assign-mod') {  // edit assignment properties
			$PAGE->requires->js('/theme/brg4/javascript/syncCutOffDate.js',false);
			$PAGE->requires->js('/theme/brg4/javascript/submissionCommentsDefaultChecked.js',false);
			$PAGE->requires->js('/theme/brg4/javascript/disableDefaultEmailNotification.js',false);
			$PAGE->requires->js('/theme/brg4/javascript/dom.js',false);
			$PAGE->requires->js('/theme/brg4/javascript/setAssignmentUploadSizeLimit.js',false);
		} 
	?>	

    <?php echo $OUTPUT->standard_head_html() ?>
</head>
<body id="<?php p($PAGE->bodyid) ?>" class="<?php p($PAGE->bodyclasses.' '.join(' ', $bodyclasses)) ?>">
<?php echo $OUTPUT->standard_top_of_body_html() ?>
<div id="page">
<?php if ($hasheading || $hasnavbar) { ?>
    <div id="page-header">
        <?php if ($hasheading) { ?>
		<a href="#" title=""><img src="<?php echo $OUTPUT->pix_url('logo_small', 'theme')?>" width="201" height="55" alt="BRG4 Moodle" title="BRG4 Moodle"></a>
        <!-- <h1 class="headermain"><?php echo $PAGE->heading ?></h1> -->
        <div class="headermenu"><?php
            if ($haslogininfo) {
                echo $OUTPUT->login_info();
            }
            if (!empty($PAGE->layout_options['langmenu'])) {
                echo $OUTPUT->lang_menu();
            }
            echo $PAGE->headingmenu
        ?></div><?php } ?>
        <?php if ($hascustommenu) { ?>
        <div id="custommenu"><?php echo $custommenu; ?></div>
        <?php } ?>
        <?php if ($hasnavbar) { ?>
            <div class="navbar clearfix">
                <div class="breadcrumb"><?php echo $OUTPUT->navbar(); ?></div>
                <div class="navbutton"> <?php echo $PAGE->button; ?></div>
            </div>
        <?php } ?>
    </div>
<?php } ?>
<!-- END OF HEADER -->

    <div id="page-content">
        <div id="region-main-box">
            <div id="region-post-box">

                <div id="region-main-wrap">
                    <div id="region-main">
                        <div class="region-content">
                            <?php echo core_renderer::MAIN_CONTENT_TOKEN ?>
                        </div>
                    </div>
                </div>

                <?php if ($hassidepre) { ?>
                <div id="region-pre" class="block-region">
                    <div class="region-content">
                        <?php echo $OUTPUT->blocks_for_region('side-pre') ?>
                    </div>
                </div>
                <?php } ?>

                <?php if ($hassidepost) { ?>
                <div id="region-post" class="block-region">
                    <div class="region-content">
                        <?php echo $OUTPUT->blocks_for_region('side-post') ?>
                    </div>
                </div>
                <?php } ?>
            </div>
        </div>
    </div>

<!-- START OF FOOTER -->
    <?php if ($hasfooter) { ?>
    <div id="page-footer" class="clearfix">
        <p class="helplink"><?php echo page_doc_link(get_string('moodledocslink')) ?></p>
        <?php
        echo $OUTPUT->login_info();
        echo $OUTPUT->home_link();
        echo $OUTPUT->standard_footer_html();
        ?>
    </div>
    <?php } ?>
</div>
<?php echo $OUTPUT->standard_end_of_body_html() ?>
</body>
</html>