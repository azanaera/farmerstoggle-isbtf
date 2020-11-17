package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimPrintoutExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Associations1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 157, column 53
    function locationRef_21 () : pcf.api.Destination {
      return pcf.ClaimAssociations.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Associations1Section) at ClaimPrintout.pcf: line 152, column 48
    function printable_23 () : java.lang.Boolean {
      return perm.ClaimAssociation.view
    }
    
    // PrintSection (id=Associations1Section) at ClaimPrintout.pcf: line 152, column 48
    function visible_22 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Associations2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 556, column 46
    function locationRef_133 (ClaimAssociation :  ClaimAssociation) : pcf.api.Destination {
      return pcf.ClaimAssociationDetail.createDestination(Claim, ClaimAssociation)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 552, column 52
    function locationRef_134 () : pcf.api.Destination {
      return pcf.ClaimAssociations.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Associations2Section) at ClaimPrintout.pcf: line 547, column 48
    function printable_136 () : java.lang.Boolean {
      return perm.ClaimAssociation.view
    }
    
    // PrintSection (id=Associations2Section) at ClaimPrintout.pcf: line 547, column 48
    function visible_135 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Associations3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Associations3Section) at ClaimPrintout.pcf: line 1195, column 48
    function defaultSetter_362 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1200, column 53
    function locationRef_355 () : pcf.api.Destination {
      return pcf.ClaimAssociations.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1210, column 46
    function locationRef_356 (ClaimAssociation :  ClaimAssociation) : pcf.api.Destination {
      return pcf.ClaimAssociationDetail.createDestination(Claim, ClaimAssociation)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1206, column 52
    function locationRef_357 () : pcf.api.Destination {
      return pcf.ClaimAssociations.createDestination(Claim)
    }
    
    // PrintSection (id=Associations3Section) at ClaimPrintout.pcf: line 1195, column 48
    function value_359 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Associations3Section) at ClaimPrintout.pcf: line 1195, column 48
    function visible_358 () : java.lang.Boolean {
      return perm.ClaimAssociation.view
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Associations3Section) at ClaimPrintout.pcf: line 1195, column 48
    function visible_360 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Associations3Section) at ClaimPrintout.pcf: line 1195, column 48
    function visible_364 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Checks1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 294, column 57
    function locationRef_61 () : pcf.api.Destination {
      return pcf.ClaimFinancialsChecks.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Checks1Section) at ClaimPrintout.pcf: line 289, column 52
    function printable_63 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Claim)
    }
    
    // PrintSection (id=Checks1Section) at ClaimPrintout.pcf: line 289, column 52
    function visible_62 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Checks2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 765, column 39
    function locationRef_193 (CheckView :  CheckView) : pcf.api.Destination {
      return pcf.ClaimFinancialsChecksDetailPrint.createDestination(Claim, CheckView)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 761, column 56
    function locationRef_194 () : pcf.api.Destination {
      return pcf.ClaimFinancialsChecks.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Checks2Section) at ClaimPrintout.pcf: line 756, column 52
    function printable_196 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Claim)
    }
    
    // PrintSection (id=Checks2Section) at ClaimPrintout.pcf: line 756, column 52
    function visible_195 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Checks3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Checks3Section) at ClaimPrintout.pcf: line 1670, column 52
    function defaultSetter_548 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1675, column 57
    function locationRef_541 () : pcf.api.Destination {
      return pcf.ClaimFinancialsChecks.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1685, column 39
    function locationRef_542 (CheckView :  CheckView) : pcf.api.Destination {
      return pcf.ClaimFinancialsChecksDetailPrint.createDestination(Claim, CheckView)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1681, column 56
    function locationRef_543 () : pcf.api.Destination {
      return pcf.ClaimFinancialsChecks.createDestination(Claim)
    }
    
    // PrintSection (id=Checks3Section) at ClaimPrintout.pcf: line 1670, column 52
    function value_545 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Checks3Section) at ClaimPrintout.pcf: line 1670, column 52
    function visible_544 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Claim)
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Checks3Section) at ClaimPrintout.pcf: line 1670, column 52
    function visible_546 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Checks3Section) at ClaimPrintout.pcf: line 1670, column 52
    function visible_550 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimLossEmployerLiability1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossEmployerLiability1Section) at ClaimPrintout.pcf: line 200, column 121
    function label_37 () : java.lang.String {
      return gw.config.CoverageSubtypeAbstraction.WorkersCompEmployersLiability.Description
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 205, column 70
    function locationRef_35 () : pcf.api.Destination {
      return pcf.TopLevelExposureDetail.createDestination(employerLiability)
    }
    
    // 'printable' attribute on PrintSection (id=ClaimLossEmployerLiability1Section) at ClaimPrintout.pcf: line 200, column 121
    function printable_38 () : java.lang.Boolean {
      return helper.isWorkersCompClaim() and employerLiability != null and perm.Exposure.view(employerLiability)
    }
    
    // PrintSection (id=ClaimLossEmployerLiability1Section) at ClaimPrintout.pcf: line 200, column 121
    function visible_36 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimLossEmployerLiability2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossEmployerLiability2Section) at ClaimPrintout.pcf: line 600, column 121
    function label_150 () : java.lang.String {
      return gw.config.CoverageSubtypeAbstraction.WorkersCompEmployersLiability.Description
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 605, column 70
    function locationRef_148 () : pcf.api.Destination {
      return pcf.TopLevelExposureDetail.createDestination(employerLiability)
    }
    
    // 'printable' attribute on PrintSection (id=ClaimLossEmployerLiability2Section) at ClaimPrintout.pcf: line 600, column 121
    function printable_151 () : java.lang.Boolean {
      return helper.isWorkersCompClaim() and employerLiability != null and perm.Exposure.view(employerLiability)
    }
    
    // PrintSection (id=ClaimLossEmployerLiability2Section) at ClaimPrintout.pcf: line 600, column 121
    function visible_149 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimLossEmployerLiabilitySectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=ClaimLossEmployerLiabilitySection) at ClaimPrintout.pcf: line 1254, column 121
    function defaultSetter_405 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossEmployerLiabilitySection) at ClaimPrintout.pcf: line 1254, column 121
    function label_403 () : java.lang.Object {
      return gw.config.CoverageSubtypeAbstraction.WorkersCompEmployersLiability.Description
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossEmployerLiabilitySection) at ClaimPrintout.pcf: line 1254, column 121
    function label_409 () : java.lang.String {
      return gw.config.CoverageSubtypeAbstraction.WorkersCompEmployersLiability.Description
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1259, column 70
    function locationRef_399 () : pcf.api.Destination {
      return pcf.TopLevelExposureDetail.createDestination(employerLiability)
    }
    
    // PrintSection (id=ClaimLossEmployerLiabilitySection) at ClaimPrintout.pcf: line 1254, column 121
    function value_401 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=ClaimLossEmployerLiabilitySection) at ClaimPrintout.pcf: line 1254, column 121
    function visible_400 () : java.lang.Boolean {
      return helper.isWorkersCompClaim() and employerLiability != null and perm.Exposure.view(employerLiability)
    }
    
    // 'childrenVisible' attribute on PrintSection (id=ClaimLossEmployerLiabilitySection) at ClaimPrintout.pcf: line 1254, column 121
    function visible_402 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=ClaimLossEmployerLiabilitySection) at ClaimPrintout.pcf: line 1254, column 121
    function visible_408 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimLossIndemityTimeLoss1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossIndemityTimeLoss1Section) at ClaimPrintout.pcf: line 188, column 119
    function label_33 () : java.lang.String {
      return gw.config.CoverageSubtypeAbstraction.WorkersCompCoverageOtherThanMedical.Description
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 193, column 69
    function locationRef_31 () : pcf.api.Destination {
      return pcf.TopLevelExposureDetail.createDestination(indemityTimeLoss)
    }
    
    // 'printable' attribute on PrintSection (id=ClaimLossIndemityTimeLoss1Section) at ClaimPrintout.pcf: line 188, column 119
    function printable_34 () : java.lang.Boolean {
      return helper.isWorkersCompClaim() and indemityTimeLoss != null and perm.Exposure.view(indemityTimeLoss)
    }
    
    // PrintSection (id=ClaimLossIndemityTimeLoss1Section) at ClaimPrintout.pcf: line 188, column 119
    function visible_32 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimLossIndemityTimeLoss2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossIndemityTimeLoss2Section) at ClaimPrintout.pcf: line 588, column 119
    function label_146 () : java.lang.String {
      return gw.config.CoverageSubtypeAbstraction.WorkersCompCoverageOtherThanMedical.Description
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 593, column 69
    function locationRef_144 () : pcf.api.Destination {
      return pcf.TopLevelExposureDetail.createDestination(indemityTimeLoss)
    }
    
    // 'printable' attribute on PrintSection (id=ClaimLossIndemityTimeLoss2Section) at ClaimPrintout.pcf: line 588, column 119
    function printable_147 () : java.lang.Boolean {
      return helper.isWorkersCompClaim() and indemityTimeLoss != null and perm.Exposure.view(indemityTimeLoss)
    }
    
    // PrintSection (id=ClaimLossIndemityTimeLoss2Section) at ClaimPrintout.pcf: line 588, column 119
    function visible_145 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimLossIndemityTimeLoss3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=ClaimLossIndemityTimeLoss3Section) at ClaimPrintout.pcf: line 1242, column 119
    function defaultSetter_393 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossIndemityTimeLoss3Section) at ClaimPrintout.pcf: line 1242, column 119
    function label_391 () : java.lang.Object {
      return gw.config.CoverageSubtypeAbstraction.WorkersCompCoverageOtherThanMedical.Description
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossIndemityTimeLoss3Section) at ClaimPrintout.pcf: line 1242, column 119
    function label_397 () : java.lang.String {
      return gw.config.CoverageSubtypeAbstraction.WorkersCompCoverageOtherThanMedical.Description
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1247, column 69
    function locationRef_387 () : pcf.api.Destination {
      return pcf.TopLevelExposureDetail.createDestination(indemityTimeLoss)
    }
    
    // PrintSection (id=ClaimLossIndemityTimeLoss3Section) at ClaimPrintout.pcf: line 1242, column 119
    function value_389 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=ClaimLossIndemityTimeLoss3Section) at ClaimPrintout.pcf: line 1242, column 119
    function visible_388 () : java.lang.Boolean {
      return helper.isWorkersCompClaim() and indemityTimeLoss != null and perm.Exposure.view(indemityTimeLoss)
    }
    
    // 'childrenVisible' attribute on PrintSection (id=ClaimLossIndemityTimeLoss3Section) at ClaimPrintout.pcf: line 1242, column 119
    function visible_390 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=ClaimLossIndemityTimeLoss3Section) at ClaimPrintout.pcf: line 1242, column 119
    function visible_396 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimLossMedicalDetail1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossMedicalDetail1Section) at ClaimPrintout.pcf: line 176, column 115
    function label_29 () : java.lang.String {
      return gw.config.CoverageSubtypeAbstraction.WorkersCompCoverageMedicalOnly.Description
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 181, column 67
    function locationRef_27 () : pcf.api.Destination {
      return pcf.TopLevelExposureDetail.createDestination(medicalDetails)
    }
    
    // 'printable' attribute on PrintSection (id=ClaimLossMedicalDetail1Section) at ClaimPrintout.pcf: line 176, column 115
    function printable_30 () : java.lang.Boolean {
      return helper.isWorkersCompClaim() and medicalDetails != null and perm.Exposure.view(medicalDetails)
    }
    
    // PrintSection (id=ClaimLossMedicalDetail1Section) at ClaimPrintout.pcf: line 176, column 115
    function visible_28 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimLossMedicalDetail2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossMedicalDetail2Section) at ClaimPrintout.pcf: line 576, column 115
    function label_142 () : java.lang.String {
      return gw.config.CoverageSubtypeAbstraction.WorkersCompCoverageMedicalOnly.Description
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 581, column 67
    function locationRef_140 () : pcf.api.Destination {
      return pcf.TopLevelExposureDetail.createDestination(medicalDetails)
    }
    
    // 'printable' attribute on PrintSection (id=ClaimLossMedicalDetail2Section) at ClaimPrintout.pcf: line 576, column 115
    function printable_143 () : java.lang.Boolean {
      return helper.isWorkersCompClaim() and medicalDetails != null and perm.Exposure.view(medicalDetails)
    }
    
    // PrintSection (id=ClaimLossMedicalDetail2Section) at ClaimPrintout.pcf: line 576, column 115
    function visible_141 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimLossMedicalDetail3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=ClaimLossMedicalDetail3Section) at ClaimPrintout.pcf: line 1230, column 115
    function defaultSetter_381 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossMedicalDetail3Section) at ClaimPrintout.pcf: line 1230, column 115
    function label_379 () : java.lang.Object {
      return gw.config.CoverageSubtypeAbstraction.WorkersCompCoverageMedicalOnly.Description
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossMedicalDetail3Section) at ClaimPrintout.pcf: line 1230, column 115
    function label_385 () : java.lang.String {
      return gw.config.CoverageSubtypeAbstraction.WorkersCompCoverageMedicalOnly.Description
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1235, column 67
    function locationRef_375 () : pcf.api.Destination {
      return pcf.TopLevelExposureDetail.createDestination(medicalDetails)
    }
    
    // PrintSection (id=ClaimLossMedicalDetail3Section) at ClaimPrintout.pcf: line 1230, column 115
    function value_377 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=ClaimLossMedicalDetail3Section) at ClaimPrintout.pcf: line 1230, column 115
    function visible_376 () : java.lang.Boolean {
      return helper.isWorkersCompClaim() and medicalDetails != null and perm.Exposure.view(medicalDetails)
    }
    
    // 'childrenVisible' attribute on PrintSection (id=ClaimLossMedicalDetail3Section) at ClaimPrintout.pcf: line 1230, column 115
    function visible_378 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=ClaimLossMedicalDetail3Section) at ClaimPrintout.pcf: line 1230, column 115
    function visible_384 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimPrintoutExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (Claim :  Claim) : int {
      return 0
    }
    
    // 'action' attribute on NonDownloadPrintOutButton at ClaimPrintout.pcf: line 101, column 58
    function action_10 () : void {
      CurrentLocation.cancel()
    }
    
    // 'action' attribute on PrintOutButton (id=ClaimPrint) at ClaimPrintout.pcf: line 98, column 21
    function action_9 () : void {
      gw.api.print.PrintOutAction.printPrintOut(printSettings)
    }
    
    // 'canVisit' attribute on PrintOut (id=ClaimPrintout) at ClaimPrintout.pcf: line 53, column 89
    static function canVisit_653 (Claim :  Claim) : java.lang.Boolean {
      return perm.Claim.view(Claim) and perm.Claim.print(Claim)
    }
    
    // 'value' attribute on PrintOut (id=ClaimPrintout) at ClaimPrintout.pcf: line 53, column 89
    function defaultSetter_87 (__VALUE_TO_SET :  java.lang.Object) : void {
      Choice = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at ClaimPrintout.pcf: line 63, column 48
    function initialValue_0 () : gw.api.print.ClaimPrintoutHelper {
      return new gw.api.print.ClaimPrintoutHelper(Claim)
    }
    
    // 'initialValue' attribute on Variable at ClaimPrintout.pcf: line 67, column 42
    function initialValue_1 () : gw.api.print.PrintSettings {
      return helper.createPrintSettings()
    }
    
    // 'initialValue' attribute on Variable at ClaimPrintout.pcf: line 71, column 24
    function initialValue_2 () : Exposure {
      return helper.getMedicalDetails()
    }
    
    // 'initialValue' attribute on Variable at ClaimPrintout.pcf: line 75, column 24
    function initialValue_3 () : Exposure {
      return helper.getIndemityTimeLoss()
    }
    
    // 'initialValue' attribute on Variable at ClaimPrintout.pcf: line 79, column 24
    function initialValue_4 () : Exposure {
      return helper.getEmployerLiability()
    }
    
    // 'initialValue' attribute on Variable at ClaimPrintout.pcf: line 83, column 23
    function initialValue_5 () : boolean {
      return (helper.isWorkersCompClaim() or helper.isHomeownersClaim()) and (gw.api.policy.PolicyTabUtil.hasTab(Claim, "Properties") or gw.api.policy.PolicyTabUtil.hasTab(Claim, "Classcodes"))
    }
    
    // 'initialValue' attribute on Variable at ClaimPrintout.pcf: line 87, column 23
    function initialValue_6 () : boolean {
      return helper.isTravelClaim() and (gw.api.policy.PolicyTabUtil.hasTab(Claim, "Trips") or gw.api.policy.PolicyTabUtil.hasTab(Claim, "Classcodes"))
    }
    
    // 'initialValue' attribute on Variable at ClaimPrintout.pcf: line 91, column 23
    function initialValue_7 () : boolean {
      return (helper.isWorkersCompClaim() or helper.isHomeownersClaim()) and gw.api.policy.PolicyTabUtil.hasTab(Claim, "Statcodes")
    }
    
    // 'label' attribute on PrintGroup (id=AllClaimPagesWithDetails) at ClaimPrintout.pcf: line 391, column 260
    function label_8 () : java.lang.Object {
      return gw.config.LOBAbstraction.ForClaim.ForLossType.isWorkComp(Claim) ? DisplayKey.get("Java.PrintClaimOptionsForm.Label.AllClaimPagesWithDetailsForWC") : DisplayKey.get("Java.PrintClaimOptionsForm.Label.AllClaimPagesWithDetails")
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 921, column 32
    function locationRef_242 (Activity :  Activity) : pcf.api.Destination {
      return pcf.ActivityDetailPrint.createDestination(Activity)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 926, column 40
    function locationRef_243 (ClaimAssociation :  ClaimAssociation) : pcf.api.Destination {
      return pcf.ClaimAssociationDetail.createDestination(Claim, ClaimAssociation)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 931, column 32
    function locationRef_244 (Exposure :  Exposure) : pcf.api.Destination {
      return pcf.ExposureDetail.createDestination(Exposure)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 937, column 36
    function locationRef_245 (selectedClaimContact :  ClaimContact) : pcf.api.Destination {
      return pcf.ClaimContactPrintDetails.createDestination(Claim, selectedClaimContact)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 942, column 38
    function locationRef_246 (ClaimUserModel :  ClaimUserModel) : pcf.api.Destination {
      return pcf.ClaimUserPrintDetails.createDestination(Claim, ClaimUserModel)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 949, column 33
    function locationRef_247 (VehicleRU :  VehicleRU) : pcf.api.Destination {
      return pcf.ClaimPolicyVehicleDetail.createDestination(Claim, VehicleRU)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 956, column 38
    function locationRef_249 (PolicyLocation :  PolicyLocation) : pcf.api.Destination {
      return pcf.PolicyLocationPrint.createDestination(PolicyLocation, Claim)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 962, column 35
    function locationRef_251 (Endorsement :  Endorsement) : pcf.api.Destination {
      return pcf.ClaimPolicyEndorsementDetail.createDestination(Claim, Endorsement)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 968, column 32
    function locationRef_252 (StatCode :  StatCode) : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodeDetail.createDestination(Claim, StatCode)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 974, column 38
    function locationRef_253 (AggregateLimit :  AggregateLimit) : pcf.api.Destination {
      return pcf.ClaimPolicyAggregateLimitDetail.createDestination(Claim, AggregateLimit)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 979, column 39
    function locationRef_254 (TransactionView :  TransactionView) : pcf.api.Destination {
      return pcf.TransactionDetailPrint.createDestination(Claim, TransactionView)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 984, column 33
    function locationRef_255 (CheckView :  CheckView) : pcf.api.Destination {
      return pcf.ClaimFinancialsChecksDetailPrint.createDestination(Claim, CheckView)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 989, column 32
    function locationRef_256 (DocumentParam :  Document) : pcf.api.Destination {
      return pcf.DocumentDetailsPrint.createDestination(Claim, DocumentParam)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 995, column 34
    function locationRef_257 (Evaluation :  Evaluation) : pcf.api.Destination {
      return pcf.ClaimEvaluationPrintDetail.createDestination(Evaluation)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 1001, column 35
    function locationRef_258 (Negotiation :  Negotiation) : pcf.api.Destination {
      return pcf.ClaimNegotiationPrintDetail.createDestination(Negotiation)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 1006, column 30
    function locationRef_259 (Matter :  Matter) : pcf.api.Destination {
      return pcf.MatterDetailPage.createDestination(Claim, Matter)
    }
    
    // 'printable' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 949, column 33
    function printable_248 () : java.lang.Boolean {
      return helper.isAutoClaim()
    }
    
    // 'printable' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 956, column 38
    function printable_250 () : java.lang.Boolean {
      return canShowClaimPolicyLocations
    }
    
    // 'value' attribute on PrintOut (id=ClaimPrintout) at ClaimPrintout.pcf: line 53, column 89
    function value_86 () : java.lang.String {
      return Choice
    }
    
    property get Choice () : java.lang.String {
      return getVariableValue("Choice", 0) as java.lang.String
    }
    
    property set Choice ($arg :  java.lang.String) {
      setVariableValue("Choice", 0, $arg)
    }
    
    property get Claim () : Claim {
      return getVariableValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setVariableValue("Claim", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.ClaimPrintout {
      return super.CurrentLocation as pcf.ClaimPrintout
    }
    
    property get canShowClaimPolicyLocations () : boolean {
      return getVariableValue("canShowClaimPolicyLocations", 0) as java.lang.Boolean
    }
    
    property set canShowClaimPolicyLocations ($arg :  boolean) {
      setVariableValue("canShowClaimPolicyLocations", 0, $arg)
    }
    
    property get canShowClaimPolicyTrips () : boolean {
      return getVariableValue("canShowClaimPolicyTrips", 0) as java.lang.Boolean
    }
    
    property set canShowClaimPolicyTrips ($arg :  boolean) {
      setVariableValue("canShowClaimPolicyTrips", 0, $arg)
    }
    
    property get canShowPolicyStatCodes () : boolean {
      return getVariableValue("canShowPolicyStatCodes", 0) as java.lang.Boolean
    }
    
    property set canShowPolicyStatCodes ($arg :  boolean) {
      setVariableValue("canShowPolicyStatCodes", 0, $arg)
    }
    
    property get employerLiability () : Exposure {
      return getVariableValue("employerLiability", 0) as Exposure
    }
    
    property set employerLiability ($arg :  Exposure) {
      setVariableValue("employerLiability", 0, $arg)
    }
    
    property get helper () : gw.api.print.ClaimPrintoutHelper {
      return getVariableValue("helper", 0) as gw.api.print.ClaimPrintoutHelper
    }
    
    property set helper ($arg :  gw.api.print.ClaimPrintoutHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get indemityTimeLoss () : Exposure {
      return getVariableValue("indemityTimeLoss", 0) as Exposure
    }
    
    property set indemityTimeLoss ($arg :  Exposure) {
      setVariableValue("indemityTimeLoss", 0, $arg)
    }
    
    property get medicalDetails () : Exposure {
      return getVariableValue("medicalDetails", 0) as Exposure
    }
    
    property set medicalDetails ($arg :  Exposure) {
      setVariableValue("medicalDetails", 0, $arg)
    }
    
    property get printSettings () : gw.api.print.PrintSettings {
      return getVariableValue("printSettings", 0) as gw.api.print.PrintSettings
    }
    
    property set printSettings ($arg :  gw.api.print.PrintSettings) {
      setVariableValue("printSettings", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshot2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 868, column 54
    function locationRef_219 () : pcf.api.Destination {
      return pcf.ClaimSnapshotLossDetails.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 871, column 55
    function locationRef_221 () : pcf.api.Destination {
      return pcf.ClaimSnapshotPartiesInvolved.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 874, column 84
    function locationRef_223 () : pcf.api.Destination {
      return pcf.ClaimSnapshotPolicy.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 877, column 85
    function locationRef_225 () : pcf.api.Destination {
      return pcf.ClaimSnapshotExposures.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 880, column 53
    function locationRef_227 () : pcf.api.Destination {
      return pcf.ClaimSnapshotNotes.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 883, column 47
    function locationRef_229 () : pcf.api.Destination {
      return pcf.ClaimSnapshotDocuments.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 886, column 54
    function locationRef_231 () : pcf.api.Destination {
      return pcf.ClaimSnapshotExtraFields.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 868, column 54
    function printable_218 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 871, column 55
    function printable_220 () : java.lang.Boolean {
      return perm.System.viewclaimparties
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 874, column 84
    function printable_222 () : java.lang.Boolean {
      return perm.Policy.view(Claim.Policy) and perm.System.viewpolicy
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 877, column 85
    function printable_224 () : java.lang.Boolean {
      return !helper.isWorkersCompClaim() and perm.System.viewexposures
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 880, column 53
    function printable_226 () : java.lang.Boolean {
      return perm.System.viewclaimnotes
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 883, column 47
    function printable_228 () : java.lang.Boolean {
      return perm.System.viewdocs
    }
    
    // 'printable' attribute on PrintSection (id=ClaimSnapshot2Section) at ClaimPrintout.pcf: line 862, column 52
    function printable_233 () : java.lang.Boolean {
      return helper.canPrintClaimSnapshot()
    }
    
    // PrintSection (id=ClaimSnapshot2Section) at ClaimPrintout.pcf: line 862, column 52
    function visible_232 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshot3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=ClaimSnapshot3Section) at ClaimPrintout.pcf: line 1813, column 52
    function defaultSetter_633 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'label' attribute on PrintSection (id=ClaimSnapshot3Section) at ClaimPrintout.pcf: line 1813, column 52
    function label_631 () : java.lang.Object {
      return gw.config.LOBAbstraction.ForClaim.ForLossType.isWorkComp(Claim) ? DisplayKey.get("Java.PrintClaimOptionsForm.Options.FirstReportOfInjurySnapshot") : DisplayKey.get("Java.PrintClaimOptionsForm.Options.FNOLSnapshot")
    }
    
    // 'label' attribute on PrintSection (id=ClaimSnapshot3Section) at ClaimPrintout.pcf: line 1813, column 52
    function label_637 () : java.lang.String {
      return gw.config.LOBAbstraction.ForClaim.ForLossType.isWorkComp(Claim) ? DisplayKey.get("Java.PrintClaimOptionsForm.Options.FirstReportOfInjurySnapshot") : DisplayKey.get("Java.PrintClaimOptionsForm.Options.FNOLSnapshot")
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1819, column 54
    function locationRef_615 () : pcf.api.Destination {
      return pcf.ClaimSnapshotLossDetails.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1822, column 55
    function locationRef_617 () : pcf.api.Destination {
      return pcf.ClaimSnapshotPartiesInvolved.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1825, column 84
    function locationRef_619 () : pcf.api.Destination {
      return pcf.ClaimSnapshotPolicy.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1828, column 85
    function locationRef_621 () : pcf.api.Destination {
      return pcf.ClaimSnapshotExposures.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1831, column 53
    function locationRef_623 () : pcf.api.Destination {
      return pcf.ClaimSnapshotNotes.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1834, column 47
    function locationRef_625 () : pcf.api.Destination {
      return pcf.ClaimSnapshotDocuments.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1837, column 54
    function locationRef_627 () : pcf.api.Destination {
      return pcf.ClaimSnapshotExtraFields.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1819, column 54
    function printable_614 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1822, column 55
    function printable_616 () : java.lang.Boolean {
      return perm.System.viewclaimparties
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1825, column 84
    function printable_618 () : java.lang.Boolean {
      return perm.Policy.view(Claim.Policy) and perm.System.viewpolicy
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1828, column 85
    function printable_620 () : java.lang.Boolean {
      return !helper.isWorkersCompClaim() and perm.System.viewexposures
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1831, column 53
    function printable_622 () : java.lang.Boolean {
      return perm.System.viewclaimnotes
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1834, column 47
    function printable_624 () : java.lang.Boolean {
      return perm.System.viewdocs
    }
    
    // PrintSection (id=ClaimSnapshot3Section) at ClaimPrintout.pcf: line 1813, column 52
    function value_629 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=ClaimSnapshot3Section) at ClaimPrintout.pcf: line 1813, column 52
    function visible_628 () : java.lang.Boolean {
      return helper.canPrintClaimSnapshot()
    }
    
    // 'childrenVisible' attribute on PrintSection (id=ClaimSnapshot3Section) at ClaimPrintout.pcf: line 1813, column 52
    function visible_630 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=ClaimSnapshot3Section) at ClaimPrintout.pcf: line 1813, column 52
    function visible_636 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Documents1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 318, column 61
    function locationRef_67 () : pcf.api.Destination {
      return pcf.ClaimDocumentsPrint.createDestination(Claim, true)
    }
    
    // 'printable' attribute on PrintSection (id=Documents1Section) at ClaimPrintout.pcf: line 313, column 42
    function printable_69 () : java.lang.Boolean {
      return perm.System.viewdocs
    }
    
    // PrintSection (id=Documents1Section) at ClaimPrintout.pcf: line 313, column 42
    function visible_68 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Documents2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 790, column 61
    function locationRef_200 () : pcf.api.Destination {
      return pcf.ClaimDocumentsPrint.createDestination(Claim, true)
    }
    
    // 'printable' attribute on PrintSection (id=Documents2Section) at ClaimPrintout.pcf: line 785, column 42
    function printable_202 () : java.lang.Boolean {
      return perm.System.viewdocs
    }
    
    // PrintSection (id=Documents2Section) at ClaimPrintout.pcf: line 785, column 42
    function visible_201 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Documents3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Documents3Section) at ClaimPrintout.pcf: line 1711, column 42
    function defaultSetter_568 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1716, column 61
    function locationRef_562 () : pcf.api.Destination {
      return pcf.ClaimDocumentsPrint.createDestination(Claim, true)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1722, column 62
    function locationRef_563 () : pcf.api.Destination {
      return pcf.ClaimDocumentsPrint.createDestination(Claim, false)
    }
    
    // PrintSection (id=Documents3Section) at ClaimPrintout.pcf: line 1711, column 42
    function value_565 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Documents3Section) at ClaimPrintout.pcf: line 1711, column 42
    function visible_564 () : java.lang.Boolean {
      return perm.System.viewdocs
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Documents3Section) at ClaimPrintout.pcf: line 1711, column 42
    function visible_566 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Documents3Section) at ClaimPrintout.pcf: line 1711, column 42
    function visible_570 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Evaluations1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 330, column 52
    function locationRef_70 () : pcf.api.Destination {
      return pcf.ClaimEvaluations.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Evaluations1Section) at ClaimPrintout.pcf: line 325, column 48
    function printable_72 () : java.lang.Boolean {
      return perm.System.viewclaimevals
    }
    
    // PrintSection (id=Evaluations1Section) at ClaimPrintout.pcf: line 325, column 48
    function visible_71 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Evaluations2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 807, column 40
    function locationRef_203 (Evaluation :  Evaluation) : pcf.api.Destination {
      return pcf.ClaimEvaluationPrintDetail.createDestination(Evaluation)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 803, column 51
    function locationRef_204 () : pcf.api.Destination {
      return pcf.ClaimEvaluations.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Evaluations2Section) at ClaimPrintout.pcf: line 797, column 48
    function printable_206 () : java.lang.Boolean {
      return perm.System.viewclaimevals
    }
    
    // PrintSection (id=Evaluations2Section) at ClaimPrintout.pcf: line 797, column 48
    function visible_205 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Evaluations3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Evaluations3Section) at ClaimPrintout.pcf: line 1729, column 48
    function defaultSetter_579 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1734, column 52
    function locationRef_572 () : pcf.api.Destination {
      return pcf.ClaimEvaluations.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1745, column 40
    function locationRef_573 (Evaluation :  Evaluation) : pcf.api.Destination {
      return pcf.ClaimEvaluationPrintDetail.createDestination(Evaluation)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1741, column 51
    function locationRef_574 () : pcf.api.Destination {
      return pcf.ClaimEvaluations.createDestination(Claim)
    }
    
    // PrintSection (id=Evaluations3Section) at ClaimPrintout.pcf: line 1729, column 48
    function value_576 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Evaluations3Section) at ClaimPrintout.pcf: line 1729, column 48
    function visible_575 () : java.lang.Boolean {
      return perm.System.viewclaimevals
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Evaluations3Section) at ClaimPrintout.pcf: line 1729, column 48
    function visible_577 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Evaluations3Section) at ClaimPrintout.pcf: line 1729, column 48
    function visible_581 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Exposures1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 218, column 50
    function locationRef_39 () : pcf.api.Destination {
      return pcf.ClaimExposures.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Exposures1Section) at ClaimPrintout.pcf: line 213, column 80
    function printable_41 () : java.lang.Boolean {
      return !helper.isWorkersCompClaim() and perm.System.viewexposures
    }
    
    // PrintSection (id=Exposures1Section) at ClaimPrintout.pcf: line 213, column 80
    function visible_40 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Exposures2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 622, column 38
    function locationRef_152 (Exposure :  Exposure) : pcf.api.Destination {
      return pcf.ExposureDetail.createDestination(Exposure)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 618, column 49
    function locationRef_153 () : pcf.api.Destination {
      return pcf.ClaimExposures.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Exposures2Section) at ClaimPrintout.pcf: line 613, column 80
    function printable_155 () : java.lang.Boolean {
      return !helper.isWorkersCompClaim() and perm.System.viewexposures
    }
    
    // PrintSection (id=Exposures2Section) at ClaimPrintout.pcf: line 613, column 80
    function visible_154 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Exposures3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Exposures3Section) at ClaimPrintout.pcf: line 1267, column 80
    function defaultSetter_418 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1272, column 50
    function locationRef_411 () : pcf.api.Destination {
      return pcf.ClaimExposures.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1282, column 38
    function locationRef_412 (Exposure :  Exposure) : pcf.api.Destination {
      return pcf.ExposureDetail.createDestination(Exposure)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1278, column 49
    function locationRef_413 () : pcf.api.Destination {
      return pcf.ClaimExposures.createDestination(Claim)
    }
    
    // PrintSection (id=Exposures3Section) at ClaimPrintout.pcf: line 1267, column 80
    function value_415 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Exposures3Section) at ClaimPrintout.pcf: line 1267, column 80
    function visible_414 () : java.lang.Boolean {
      return !helper.isWorkersCompClaim() and perm.System.viewexposures
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Exposures3Section) at ClaimPrintout.pcf: line 1267, column 80
    function visible_416 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Exposures3Section) at ClaimPrintout.pcf: line 1267, column 80
    function visible_420 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FinancialsSummary1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 255, column 63
    function locationRef_48 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 257, column 73
    function locationRef_49 () : pcf.api.Destination {
      return pcf.FinancialsSummaryExposurePrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 259, column 77
    function locationRef_50 () : pcf.api.Destination {
      return pcf.FinancialsSummaryExposureOnlyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 261, column 73
    function locationRef_51 () : pcf.api.Destination {
      return pcf.FinancialsSummaryClaimantPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 263, column 73
    function locationRef_52 () : pcf.api.Destination {
      return pcf.FinancialsSummaryCoveragePrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 265, column 78
    function locationRef_53 () : pcf.api.Destination {
      return pcf.FinancialsSummaryClaimCostOnlyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 267, column 82
    function locationRef_54 () : pcf.api.Destination {
      return pcf.FinancialsSummaryReservingCurrencyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 269, column 81
    function locationRef_55 () : pcf.api.Destination {
      return pcf.FinancialsSummaryRecoveryCategoryPrint.createDestination(Claim, false)
    }
    
    // 'printable' attribute on PrintSection (id=FinancialsSummary1Section) at ClaimPrintout.pcf: line 250, column 44
    function printable_57 () : java.lang.Boolean {
      return perm.System.viewfinsum
    }
    
    // PrintSection (id=FinancialsSummary1Section) at ClaimPrintout.pcf: line 250, column 44
    function visible_56 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FinancialsSummary2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 718, column 63
    function locationRef_179 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 720, column 73
    function locationRef_180 () : pcf.api.Destination {
      return pcf.FinancialsSummaryExposurePrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 722, column 77
    function locationRef_181 () : pcf.api.Destination {
      return pcf.FinancialsSummaryExposureOnlyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 724, column 73
    function locationRef_182 () : pcf.api.Destination {
      return pcf.FinancialsSummaryClaimantPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 726, column 73
    function locationRef_183 () : pcf.api.Destination {
      return pcf.FinancialsSummaryCoveragePrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 728, column 78
    function locationRef_184 () : pcf.api.Destination {
      return pcf.FinancialsSummaryClaimCostOnlyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 730, column 82
    function locationRef_185 () : pcf.api.Destination {
      return pcf.FinancialsSummaryReservingCurrencyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 732, column 81
    function locationRef_186 () : pcf.api.Destination {
      return pcf.FinancialsSummaryRecoveryCategoryPrint.createDestination(Claim, false)
    }
    
    // 'printable' attribute on PrintSection (id=FinancialsSummary2Section) at ClaimPrintout.pcf: line 713, column 44
    function printable_188 () : java.lang.Boolean {
      return perm.System.viewfinsum
    }
    
    // PrintSection (id=FinancialsSummary2Section) at ClaimPrintout.pcf: line 713, column 44
    function visible_187 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FinancialsSummary3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=FinancialsSummary3Section) at ClaimPrintout.pcf: line 1484, column 44
    function defaultSetter_506 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1489, column 63
    function locationRef_480 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1491, column 73
    function locationRef_481 () : pcf.api.Destination {
      return pcf.FinancialsSummaryExposurePrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1493, column 77
    function locationRef_482 () : pcf.api.Destination {
      return pcf.FinancialsSummaryExposureOnlyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1495, column 73
    function locationRef_483 () : pcf.api.Destination {
      return pcf.FinancialsSummaryClaimantPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1497, column 73
    function locationRef_484 () : pcf.api.Destination {
      return pcf.FinancialsSummaryCoveragePrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1499, column 78
    function locationRef_485 () : pcf.api.Destination {
      return pcf.FinancialsSummaryClaimCostOnlyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1501, column 82
    function locationRef_486 () : pcf.api.Destination {
      return pcf.FinancialsSummaryReservingCurrencyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1503, column 81
    function locationRef_487 () : pcf.api.Destination {
      return pcf.FinancialsSummaryRecoveryCategoryPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1509, column 63
    function locationRef_488 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1511, column 73
    function locationRef_489 () : pcf.api.Destination {
      return pcf.FinancialsSummaryExposurePrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1517, column 63
    function locationRef_490 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1519, column 77
    function locationRef_491 () : pcf.api.Destination {
      return pcf.FinancialsSummaryExposureOnlyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1525, column 63
    function locationRef_492 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1527, column 73
    function locationRef_493 () : pcf.api.Destination {
      return pcf.FinancialsSummaryClaimantPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1533, column 63
    function locationRef_494 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1535, column 73
    function locationRef_495 () : pcf.api.Destination {
      return pcf.FinancialsSummaryCoveragePrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1541, column 63
    function locationRef_496 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1543, column 78
    function locationRef_497 () : pcf.api.Destination {
      return pcf.FinancialsSummaryClaimCostOnlyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1549, column 63
    function locationRef_498 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1551, column 82
    function locationRef_499 () : pcf.api.Destination {
      return pcf.FinancialsSummaryReservingCurrencyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1557, column 63
    function locationRef_500 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1559, column 81
    function locationRef_501 () : pcf.api.Destination {
      return pcf.FinancialsSummaryRecoveryCategoryPrint.createDestination(Claim, false)
    }
    
    // PrintSection (id=FinancialsSummary3Section) at ClaimPrintout.pcf: line 1484, column 44
    function value_503 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=FinancialsSummary3Section) at ClaimPrintout.pcf: line 1484, column 44
    function visible_502 () : java.lang.Boolean {
      return perm.System.viewfinsum
    }
    
    // 'childrenVisible' attribute on PrintSection (id=FinancialsSummary3Section) at ClaimPrintout.pcf: line 1484, column 44
    function visible_504 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=FinancialsSummary3Section) at ClaimPrintout.pcf: line 1484, column 44
    function visible_508 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FinancialsTransaction1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 282, column 125
    function locationRef_58 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.ALL)
    }
    
    // 'printable' attribute on PrintSection (id=FinancialsTransaction1Section) at ClaimPrintout.pcf: line 276, column 62
    function printable_60 () : java.lang.Boolean {
      return perm.Claim.viewtransactiondetails(Claim)
    }
    
    // PrintSection (id=FinancialsTransaction1Section) at ClaimPrintout.pcf: line 276, column 62
    function visible_59 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FinancialsTransaction2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 748, column 45
    function locationRef_189 (TransactionView :  TransactionView) : pcf.api.Destination {
      return pcf.TransactionDetailPrint.createDestination(Claim, TransactionView)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 744, column 124
    function locationRef_190 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.ALL)
    }
    
    // 'printable' attribute on PrintSection (id=FinancialsTransaction2Section) at ClaimPrintout.pcf: line 739, column 62
    function printable_192 () : java.lang.Boolean {
      return perm.Claim.viewtransactiondetails(Claim)
    }
    
    // PrintSection (id=FinancialsTransaction2Section) at ClaimPrintout.pcf: line 739, column 62
    function visible_191 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FinancialsTransactionSectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=FinancialsTransactionSection) at ClaimPrintout.pcf: line 1566, column 62
    function defaultSetter_537 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1572, column 125
    function locationRef_510 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.ALL)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1582, column 45
    function locationRef_511 (TransactionView :  TransactionView) : pcf.api.Destination {
      return pcf.TransactionDetailPrint.createDestination(Claim, TransactionView)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1578, column 124
    function locationRef_512 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.ALL)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1591, column 129
    function locationRef_513 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.RESERVE)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1602, column 45
    function locationRef_515 (TransactionView :  TransactionView) : pcf.api.Destination {
      return pcf.TransactionDetailPrint.createDestination(Claim, TransactionView)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1598, column 128
    function locationRef_516 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.RESERVE)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1611, column 129
    function locationRef_518 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.PAYMENT)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1622, column 45
    function locationRef_520 (TransactionView :  TransactionView) : pcf.api.Destination {
      return pcf.TransactionDetailPrint.createDestination(Claim, TransactionView)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1618, column 128
    function locationRef_521 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.PAYMENT)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1631, column 130
    function locationRef_523 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.RECOVERY)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1642, column 45
    function locationRef_525 (TransactionView :  TransactionView) : pcf.api.Destination {
      return pcf.TransactionDetailPrint.createDestination(Claim, TransactionView)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1638, column 129
    function locationRef_526 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.RECOVERY)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1651, column 138
    function locationRef_528 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.RECOVERY_RESERVE)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1662, column 45
    function locationRef_530 (TransactionView :  TransactionView) : pcf.api.Destination {
      return pcf.TransactionDetailPrint.createDestination(Claim, TransactionView)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1658, column 137
    function locationRef_531 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.RECOVERY_RESERVE)
    }
    
    // 'printable' attribute on PrintOption (id=FinancialsTransactionReservesWithoutDetailsOption) at ClaimPrintout.pcf: line 1589, column 54
    function printable_514 () : java.lang.Boolean {
      return perm.Claim.viewreserves(Claim)
    }
    
    // 'printable' attribute on PrintOption (id=FinancialsTransactionPaymentsWithoutDetailsOption) at ClaimPrintout.pcf: line 1609, column 54
    function printable_519 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Claim)
    }
    
    // 'printable' attribute on PrintOption (id=FinancialsTransactionRecoveriesWithoutDetailsOption) at ClaimPrintout.pcf: line 1629, column 56
    function printable_524 () : java.lang.Boolean {
      return perm.Claim.viewrecoveries(Claim)
    }
    
    // 'printable' attribute on PrintOption (id=FinancialsTransactionRecoveryReservesWithoutDetailsOption) at ClaimPrintout.pcf: line 1649, column 119
    function printable_529 () : java.lang.Boolean {
      return perm.Claim.viewrecoveryreserves(Claim) and gw.api.print.ClaimPrintoutHelper.UseRecoveryReserves
    }
    
    // PrintSection (id=FinancialsTransactionSection) at ClaimPrintout.pcf: line 1566, column 62
    function value_534 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=FinancialsTransactionSection) at ClaimPrintout.pcf: line 1566, column 62
    function visible_533 () : java.lang.Boolean {
      return perm.Claim.viewtransactiondetails(Claim)
    }
    
    // 'childrenVisible' attribute on PrintSection (id=FinancialsTransactionSection) at ClaimPrintout.pcf: line 1566, column 62
    function visible_535 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=FinancialsTransactionSection) at ClaimPrintout.pcf: line 1566, column 62
    function visible_539 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class History1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 382, column 48
    function filter_82 (VALUE :  gw.entity.TypeKey) : gw.api.filters.IFilter {
      return gw.api.util.CoreFilters.ALL
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 382, column 48
    function locationRef_83 () : pcf.api.Destination {
      return pcf.ClaimHistory.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=History1Section) at ClaimPrintout.pcf: line 375, column 50
    function printable_85 () : java.lang.Boolean {
      return perm.System.viewclaimhistory
    }
    
    // PrintSection (id=History1Section) at ClaimPrintout.pcf: line 375, column 50
    function visible_84 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class History2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 901, column 48
    function filter_234 (VALUE :  gw.entity.TypeKey) : gw.api.filters.IFilter {
      return gw.api.util.CoreFilters.ALL
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 901, column 48
    function locationRef_235 () : pcf.api.Destination {
      return pcf.ClaimHistory.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=History2Section) at ClaimPrintout.pcf: line 894, column 50
    function printable_237 () : java.lang.Boolean {
      return perm.System.viewclaimhistory
    }
    
    // PrintSection (id=History2Section) at ClaimPrintout.pcf: line 894, column 50
    function visible_236 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class History3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=History3Section) at ClaimPrintout.pcf: line 1845, column 50
    function defaultSetter_647 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'filter' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1852, column 48
    function filter_639 (VALUE :  gw.entity.TypeKey) : gw.api.filters.IFilter {
      return gw.api.util.CoreFilters.ALL
    }
    
    // 'filter' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1860, column 48
    function filter_641 (VALUE :  HistoryType) : gw.api.filters.IFilter {
      return new gw.api.filters.TypeKeyFilter(VALUE, History#Type.PropertyInfo as gw.entity.ITypekeyPropertyInfo)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1852, column 48
    function locationRef_640 () : pcf.api.Destination {
      return pcf.ClaimHistory.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1860, column 48
    function locationRef_642 () : pcf.api.Destination {
      return pcf.ClaimHistory.createDestination(Claim)
    }
    
    // PrintSection (id=History3Section) at ClaimPrintout.pcf: line 1845, column 50
    function value_644 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=History3Section) at ClaimPrintout.pcf: line 1845, column 50
    function visible_643 () : java.lang.Boolean {
      return perm.System.viewclaimhistory
    }
    
    // 'childrenVisible' attribute on PrintSection (id=History3Section) at ClaimPrintout.pcf: line 1845, column 50
    function visible_645 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=History3Section) at ClaimPrintout.pcf: line 1845, column 50
    function visible_649 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HomeownerPropertyIncident2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 502, column 106
    function locationRef_115 () : pcf.api.Destination {
      return pcf.DwellingIncidentPrint.createDestination(Claim, helper.DwellingIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 506, column 122
    function locationRef_117 () : pcf.api.Destination {
      return pcf.PropertyContentsIncidentPrint.createDestination(Claim, helper.PersonalPropertyIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 510, column 118
    function locationRef_119 () : pcf.api.Destination {
      return pcf.OtherStructureIncidentPrint.createDestination(Claim, helper.OtherStructureIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 514, column 118
    function locationRef_121 () : pcf.api.Destination {
      return pcf.LivingExpensesIncidentPrint.createDestination(Claim, helper.LivingExpensesIncident)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 502, column 106
    function printable_114 () : java.lang.Boolean {
      return helper.DwellingIncident != null and perm.Incident.view(helper.DwellingIncident)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 506, column 122
    function printable_116 () : java.lang.Boolean {
      return helper.PersonalPropertyIncident != null and perm.Incident.view(helper.PersonalPropertyIncident)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 510, column 118
    function printable_118 () : java.lang.Boolean {
      return helper.OtherStructureIncident != null and perm.Incident.view(helper.OtherStructureIncident)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 514, column 118
    function printable_120 () : java.lang.Boolean {
      return helper.LivingExpensesIncident != null and perm.Incident.view(helper.LivingExpensesIncident)
    }
    
    // 'printable' attribute on PrintOption (id=HomeownerIncidentOption) at ClaimPrintout.pcf: line 498, column 50
    function printable_122 () : java.lang.Boolean {
      return helper.isHomeownersClaim()
    }
    
    // PrintSection (id=HomeownerPropertyIncident2Section) at ClaimPrintout.pcf: line 494, column 48
    function visible_123 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HomeownerPropertyIncident3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=HomeownerPropertyIncident3Section) at ClaimPrintout.pcf: line 1142, column 48
    function defaultSetter_337 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1150, column 106
    function locationRef_325 () : pcf.api.Destination {
      return pcf.DwellingIncidentPrint.createDestination(Claim, helper.DwellingIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1154, column 122
    function locationRef_327 () : pcf.api.Destination {
      return pcf.PropertyContentsIncidentPrint.createDestination(Claim, helper.PersonalPropertyIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1158, column 118
    function locationRef_329 () : pcf.api.Destination {
      return pcf.OtherStructureIncidentPrint.createDestination(Claim, helper.OtherStructureIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1162, column 118
    function locationRef_331 () : pcf.api.Destination {
      return pcf.LivingExpensesIncidentPrint.createDestination(Claim, helper.LivingExpensesIncident)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1150, column 106
    function printable_324 () : java.lang.Boolean {
      return helper.DwellingIncident != null and perm.Incident.view(helper.DwellingIncident)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1154, column 122
    function printable_326 () : java.lang.Boolean {
      return helper.PersonalPropertyIncident != null and perm.Incident.view(helper.PersonalPropertyIncident)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1158, column 118
    function printable_328 () : java.lang.Boolean {
      return helper.OtherStructureIncident != null and perm.Incident.view(helper.OtherStructureIncident)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1162, column 118
    function printable_330 () : java.lang.Boolean {
      return helper.LivingExpensesIncident != null and perm.Incident.view(helper.LivingExpensesIncident)
    }
    
    // 'printable' attribute on PrintOption (id=HomeownerIncidentOption) at ClaimPrintout.pcf: line 1146, column 50
    function printable_332 () : java.lang.Boolean {
      return helper.isHomeownersClaim()
    }
    
    // PrintSection (id=HomeownerPropertyIncident3Section) at ClaimPrintout.pcf: line 1142, column 48
    function value_334 () : java.lang.Object {
      return null
    }
    
    // 'childrenVisible' attribute on PrintSection (id=HomeownerPropertyIncident3Section) at ClaimPrintout.pcf: line 1142, column 48
    function visible_335 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=HomeownerPropertyIncident3Section) at ClaimPrintout.pcf: line 1142, column 48
    function visible_339 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InjuryIncident2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 485, column 44
    function locationRef_110 (InjuryIncident :  InjuryIncident) : pcf.api.Destination {
      return pcf.InjuryIncidentDetailPrint.createDestination(InjuryIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 481, column 57
    function locationRef_112 () : pcf.api.Destination {
      return pcf.InjuryIncidentsPrint.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 481, column 57
    function printable_111 () : java.lang.Boolean {
      return !helper.InjuryIncidents.IsEmpty
    }
    
    // PrintSection (id=InjuryIncident2Section) at ClaimPrintout.pcf: line 475, column 106
    function visible_113 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InjuryIncident3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=InjuryIncident3Section) at ClaimPrintout.pcf: line 1123, column 106
    function defaultSetter_322 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1133, column 44
    function locationRef_316 (InjuryIncident :  InjuryIncident) : pcf.api.Destination {
      return pcf.InjuryIncidentDetailPrint.createDestination(InjuryIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1129, column 57
    function locationRef_318 () : pcf.api.Destination {
      return pcf.InjuryIncidentsPrint.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1129, column 57
    function printable_317 () : java.lang.Boolean {
      return !helper.InjuryIncidents.IsEmpty
    }
    
    // PrintSection (id=InjuryIncident3Section) at ClaimPrintout.pcf: line 1123, column 106
    function value_319 () : java.lang.Object {
      return null
    }
    
    // 'childrenVisible' attribute on PrintSection (id=InjuryIncident3Section) at ClaimPrintout.pcf: line 1123, column 106
    function visible_320 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=InjuryIncident3Section) at ClaimPrintout.pcf: line 1123, column 106
    function visible_323 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Litigation1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 367, column 48
    function locationRef_79 () : pcf.api.Destination {
      return pcf.ClaimMatters.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Litigation1Section) at ClaimPrintout.pcf: line 362, column 45
    function printable_81 () : java.lang.Boolean {
      return perm.System.viewmatters
    }
    
    // PrintSection (id=Litigation1Section) at ClaimPrintout.pcf: line 362, column 45
    function visible_80 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Litigation2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 854, column 36
    function locationRef_214 (Matter :  Matter) : pcf.api.Destination {
      return pcf.MatterDetailPage.createDestination(Claim, Matter)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 850, column 47
    function locationRef_215 () : pcf.api.Destination {
      return pcf.ClaimMatters.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Litigation2Section) at ClaimPrintout.pcf: line 845, column 45
    function printable_217 () : java.lang.Boolean {
      return perm.System.viewmatters
    }
    
    // PrintSection (id=Litigation2Section) at ClaimPrintout.pcf: line 845, column 45
    function visible_216 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Litigation3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Litigation3Section) at ClaimPrintout.pcf: line 1790, column 45
    function defaultSetter_610 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1795, column 48
    function locationRef_603 () : pcf.api.Destination {
      return pcf.ClaimMatters.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1805, column 36
    function locationRef_604 (Matter :  Matter) : pcf.api.Destination {
      return pcf.MatterDetailPage.createDestination(Claim, Matter)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1801, column 47
    function locationRef_605 () : pcf.api.Destination {
      return pcf.ClaimMatters.createDestination(Claim)
    }
    
    // PrintSection (id=Litigation3Section) at ClaimPrintout.pcf: line 1790, column 45
    function value_607 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Litigation3Section) at ClaimPrintout.pcf: line 1790, column 45
    function visible_606 () : java.lang.Boolean {
      return perm.System.viewmatters
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Litigation3Section) at ClaimPrintout.pcf: line 1790, column 45
    function visible_608 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Litigation3Section) at ClaimPrintout.pcf: line 1790, column 45
    function visible_612 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LossDetails1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 145, column 52
    function locationRef_18 () : pcf.api.Destination {
      return pcf.ClaimLossDetails.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=LossDetails1Section) at ClaimPrintout.pcf: line 140, column 49
    function printable_20 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // PrintSection (id=LossDetails1Section) at ClaimPrintout.pcf: line 140, column 49
    function visible_19 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LossDetails2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 432, column 52
    function locationRef_98 () : pcf.api.Destination {
      return pcf.ClaimLossDetails.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=LossDetails2Section) at ClaimPrintout.pcf: line 427, column 49
    function printable_100 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // PrintSection (id=LossDetails2Section) at ClaimPrintout.pcf: line 427, column 49
    function visible_99 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LossDetails3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=LossDetails3Section) at ClaimPrintout.pcf: line 1074, column 49
    function defaultSetter_291 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1079, column 52
    function locationRef_286 () : pcf.api.Destination {
      return pcf.ClaimLossDetails.createDestination(Claim)
    }
    
    // PrintSection (id=LossDetails3Section) at ClaimPrintout.pcf: line 1074, column 49
    function value_288 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=LossDetails3Section) at ClaimPrintout.pcf: line 1074, column 49
    function visible_287 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // 'childrenVisible' attribute on PrintSection (id=LossDetails3Section) at ClaimPrintout.pcf: line 1074, column 49
    function visible_289 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=LossDetails3Section) at ClaimPrintout.pcf: line 1074, column 49
    function visible_293 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Negotiations1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 343, column 53
    function locationRef_73 () : pcf.api.Destination {
      return pcf.ClaimNegotiations.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Negotiations1Section) at ClaimPrintout.pcf: line 337, column 48
    function printable_75 () : java.lang.Boolean {
      return perm.System.viewclaimngtns
    }
    
    // PrintSection (id=Negotiations1Section) at ClaimPrintout.pcf: line 337, column 48
    function visible_74 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Negotiations2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 825, column 41
    function locationRef_207 (Negotiation :  Negotiation) : pcf.api.Destination {
      return pcf.ClaimNegotiationPrintDetail.createDestination(Negotiation)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 821, column 52
    function locationRef_208 () : pcf.api.Destination {
      return pcf.ClaimNegotiations.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Negotiations2Section) at ClaimPrintout.pcf: line 815, column 48
    function printable_210 () : java.lang.Boolean {
      return perm.System.viewclaimngtns
    }
    
    // PrintSection (id=Negotiations2Section) at ClaimPrintout.pcf: line 815, column 48
    function visible_209 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Negotiations3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Negotiations3Section) at ClaimPrintout.pcf: line 1753, column 48
    function defaultSetter_590 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1759, column 53
    function locationRef_583 () : pcf.api.Destination {
      return pcf.ClaimNegotiations.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1770, column 41
    function locationRef_584 (Negotiation :  Negotiation) : pcf.api.Destination {
      return pcf.ClaimNegotiationPrintDetail.createDestination(Negotiation)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1766, column 52
    function locationRef_585 () : pcf.api.Destination {
      return pcf.ClaimNegotiations.createDestination(Claim)
    }
    
    // PrintSection (id=Negotiations3Section) at ClaimPrintout.pcf: line 1753, column 48
    function value_587 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Negotiations3Section) at ClaimPrintout.pcf: line 1753, column 48
    function visible_586 () : java.lang.Boolean {
      return perm.System.viewclaimngtns
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Negotiations3Section) at ClaimPrintout.pcf: line 1753, column 48
    function visible_588 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Negotiations3Section) at ClaimPrintout.pcf: line 1753, column 48
    function visible_592 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Notes1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 306, column 54
    function locationRef_64 () : pcf.api.Destination {
      return pcf.ClaimAllNotesPrint.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Notes1Section) at ClaimPrintout.pcf: line 301, column 48
    function printable_66 () : java.lang.Boolean {
      return perm.System.viewclaimnotes
    }
    
    // PrintSection (id=Notes1Section) at ClaimPrintout.pcf: line 301, column 48
    function visible_65 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Notes2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 778, column 54
    function locationRef_197 () : pcf.api.Destination {
      return pcf.ClaimAllNotesPrint.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Notes2Section) at ClaimPrintout.pcf: line 773, column 48
    function printable_199 () : java.lang.Boolean {
      return perm.System.viewclaimnotes
    }
    
    // PrintSection (id=Notes2Section) at ClaimPrintout.pcf: line 773, column 48
    function visible_198 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Notes3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Notes3Section) at ClaimPrintout.pcf: line 1693, column 48
    function defaultSetter_558 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1698, column 65
    function locationRef_552 () : pcf.api.Destination {
      return pcf.ClaimNoConfidentialNotesPrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1704, column 54
    function locationRef_553 () : pcf.api.Destination {
      return pcf.ClaimAllNotesPrint.createDestination(Claim)
    }
    
    // PrintSection (id=Notes3Section) at ClaimPrintout.pcf: line 1693, column 48
    function value_555 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Notes3Section) at ClaimPrintout.pcf: line 1693, column 48
    function visible_554 () : java.lang.Boolean {
      return perm.System.viewclaimnotes
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Notes3Section) at ClaimPrintout.pcf: line 1693, column 48
    function visible_556 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Notes3Section) at ClaimPrintout.pcf: line 1693, column 48
    function visible_560 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PartiesInvolved1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 230, column 49
    function locationRef_42 () : pcf.api.Destination {
      return pcf.ClaimContacts.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=PartiesInvolved1Section) at ClaimPrintout.pcf: line 225, column 50
    function printable_44 () : java.lang.Boolean {
      return perm.System.viewclaimparties
    }
    
    // PrintSection (id=PartiesInvolved1Section) at ClaimPrintout.pcf: line 225, column 50
    function visible_43 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PartiesInvolved2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 640, column 49
    function locationRef_156 (selectedClaimContact :  entity.ClaimContact) : pcf.api.Destination {
      return pcf.ClaimContactPrintDetails.createDestination(Claim, selectedClaimContact) 
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 636, column 48
    function locationRef_157 () : pcf.api.Destination {
      return pcf.ClaimContacts.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=PartiesInvolved2Section) at ClaimPrintout.pcf: line 630, column 50
    function printable_159 () : java.lang.Boolean {
      return perm.System.viewclaimparties
    }
    
    // PrintSection (id=PartiesInvolved2Section) at ClaimPrintout.pcf: line 630, column 50
    function visible_158 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PartiesInvolved3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=PartiesInvolved3Section) at ClaimPrintout.pcf: line 1290, column 50
    function defaultSetter_429 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1295, column 49
    function locationRef_422 () : pcf.api.Destination {
      return pcf.ClaimContacts.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1306, column 42
    function locationRef_423 (selectedClaimContact :  ClaimContact) : pcf.api.Destination {
      return pcf.ClaimContactPrintDetails.createDestination(Claim, selectedClaimContact)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1302, column 48
    function locationRef_424 () : pcf.api.Destination {
      return pcf.ClaimContacts.createDestination(Claim)
    }
    
    // PrintSection (id=PartiesInvolved3Section) at ClaimPrintout.pcf: line 1290, column 50
    function value_426 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=PartiesInvolved3Section) at ClaimPrintout.pcf: line 1290, column 50
    function visible_425 () : java.lang.Boolean {
      return perm.System.viewclaimparties
    }
    
    // 'childrenVisible' attribute on PrintSection (id=PartiesInvolved3Section) at ClaimPrintout.pcf: line 1290, column 50
    function visible_427 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=PartiesInvolved3Section) at ClaimPrintout.pcf: line 1290, column 50
    function visible_431 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Policy1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 243, column 54
    function locationRef_45 () : pcf.api.Destination {
      return pcf.ClaimPolicyGeneral.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Policy1Section) at ClaimPrintout.pcf: line 237, column 44
    function printable_47 () : java.lang.Boolean {
      return perm.System.viewpolicy
    }
    
    // PrintSection (id=Policy1Section) at ClaimPrintout.pcf: line 237, column 44
    function visible_46 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Policy2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 654, column 54
    function locationRef_160 () : pcf.api.Destination {
      return pcf.ClaimPolicyGeneral.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 662, column 39
    function locationRef_161 (VehicleRU :  VehicleRU) : pcf.api.Destination {
      return pcf.ClaimPolicyVehicleDetail.createDestination(Claim, VehicleRU)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 658, column 46
    function locationRef_163 () : pcf.api.Destination {
      return pcf.ClaimPolicyVehicles.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 671, column 44
    function locationRef_164 (PolicyLocation :  PolicyLocation) : pcf.api.Destination {
      return pcf.PolicyLocationPrint.createDestination(PolicyLocation, Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 667, column 53
    function locationRef_166 () : pcf.api.Destination {
      return pcf.ClaimPolicyLocations.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 680, column 36
    function locationRef_167 (aTripRU :  TripRU) : pcf.api.Destination {
      return pcf.TripRUPrint.createDestination(Claim, aTripRU)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 676, column 49
    function locationRef_169 () : pcf.api.Destination {
      return pcf.ClaimPolicyTrips.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 688, column 41
    function locationRef_170 (Endorsement :  Endorsement) : pcf.api.Destination {
      return pcf.ClaimPolicyEndorsementDetail.createDestination(Claim, Endorsement)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 684, column 58
    function locationRef_171 () : pcf.api.Destination {
      return pcf.ClaimPolicyEndorsements.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 697, column 38
    function locationRef_172 (StatCode :  StatCode) : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodeDetail.createDestination(Claim, StatCode)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 693, column 48
    function locationRef_174 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodes.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 705, column 44
    function locationRef_175 (AggregateLimit :  AggregateLimit) : pcf.api.Destination {
      return pcf.ClaimPolicyAggregateLimitDetail.createDestination(Claim, AggregateLimit)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 701, column 61
    function locationRef_176 () : pcf.api.Destination {
      return pcf.ClaimPolicyAggregateLimits.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 658, column 46
    function printable_162 () : java.lang.Boolean {
      return helper.isAutoClaim()
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 667, column 53
    function printable_165 () : java.lang.Boolean {
      return canShowClaimPolicyLocations
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 676, column 49
    function printable_168 () : java.lang.Boolean {
      return canShowClaimPolicyTrips
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 693, column 48
    function printable_173 () : java.lang.Boolean {
      return canShowPolicyStatCodes
    }
    
    // 'printable' attribute on PrintSection (id=Policy2Section) at ClaimPrintout.pcf: line 648, column 44
    function printable_178 () : java.lang.Boolean {
      return perm.System.viewpolicy
    }
    
    // PrintSection (id=Policy2Section) at ClaimPrintout.pcf: line 648, column 44
    function visible_177 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Policy3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Policy3Section) at ClaimPrintout.pcf: line 1314, column 44
    function defaultSetter_476 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1320, column 54
    function locationRef_433 () : pcf.api.Destination {
      return pcf.ClaimPolicyGeneral.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1334, column 39
    function locationRef_434 (VehicleRU :  VehicleRU) : pcf.api.Destination {
      return pcf.ClaimPolicyVehicleDetail.createDestination(Claim, VehicleRU)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1330, column 54
    function locationRef_435 () : pcf.api.Destination {
      return pcf.ClaimPolicyVehicles.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1349, column 44
    function locationRef_437 (PolicyLocation :  PolicyLocation) : pcf.api.Destination {
      return pcf.PolicyLocationPrint.createDestination(PolicyLocation, Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1345, column 53
    function locationRef_439 () : pcf.api.Destination {
      return pcf.ClaimPolicyLocations.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1363, column 36
    function locationRef_441 (aTripRU :  TripRU) : pcf.api.Destination {
      return pcf.TripRUPrint.createDestination(Claim, aTripRU)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1359, column 51
    function locationRef_442 () : pcf.api.Destination {
      return pcf.ClaimPolicyTrips.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1376, column 41
    function locationRef_444 (Endorsement :  Endorsement) : pcf.api.Destination {
      return pcf.ClaimPolicyEndorsementDetail.createDestination(Claim, Endorsement)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1372, column 58
    function locationRef_445 () : pcf.api.Destination {
      return pcf.ClaimPolicyEndorsements.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1389, column 38
    function locationRef_446 (StatCode :  StatCode) : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodeDetail.createDestination(Claim, StatCode)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1385, column 60
    function locationRef_447 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodesPrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1401, column 44
    function locationRef_449 (AggregateLimit :  AggregateLimit) : pcf.api.Destination {
      return pcf.ClaimPolicyAggregateLimitDetail.createDestination(Claim, AggregateLimit)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1397, column 61
    function locationRef_450 () : pcf.api.Destination {
      return pcf.ClaimPolicyAggregateLimits.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1410, column 54
    function locationRef_451 () : pcf.api.Destination {
      return pcf.ClaimPolicyGeneral.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1417, column 39
    function locationRef_452 (VehicleRU :  VehicleRU) : pcf.api.Destination {
      return pcf.ClaimPolicyVehicleDetail.createDestination(Claim, VehicleRU)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1413, column 54
    function locationRef_453 () : pcf.api.Destination {
      return pcf.ClaimPolicyVehicles.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1425, column 54
    function locationRef_455 () : pcf.api.Destination {
      return pcf.ClaimPolicyGeneral.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1433, column 39
    function locationRef_456 (VehicleRU :  VehicleRU) : pcf.api.Destination {
      return pcf.ClaimPolicyVehicleDetail.createDestination(Claim, VehicleRU)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1429, column 46
    function locationRef_458 () : pcf.api.Destination {
      return pcf.ClaimPolicyVehicles.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1442, column 44
    function locationRef_459 (PolicyLocation :  PolicyLocation) : pcf.api.Destination {
      return pcf.PolicyLocationPrint.createDestination(PolicyLocation, Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1438, column 53
    function locationRef_461 () : pcf.api.Destination {
      return pcf.ClaimPolicyLocations.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1451, column 36
    function locationRef_462 (aTripRU :  TripRU) : pcf.api.Destination {
      return pcf.TripRUPrint.createDestination(Claim, aTripRU)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1447, column 49
    function locationRef_464 () : pcf.api.Destination {
      return pcf.ClaimPolicyTrips.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1459, column 41
    function locationRef_465 (Endorsement :  Endorsement) : pcf.api.Destination {
      return pcf.ClaimPolicyEndorsementDetail.createDestination(Claim, Endorsement)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1455, column 58
    function locationRef_466 () : pcf.api.Destination {
      return pcf.ClaimPolicyEndorsements.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1468, column 38
    function locationRef_467 (StatCode :  StatCode) : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodeDetail.createDestination(Claim, StatCode)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1464, column 48
    function locationRef_469 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodes.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1476, column 44
    function locationRef_470 (AggregateLimit :  AggregateLimit) : pcf.api.Destination {
      return pcf.ClaimPolicyAggregateLimitDetail.createDestination(Claim, AggregateLimit)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1472, column 61
    function locationRef_471 () : pcf.api.Destination {
      return pcf.ClaimPolicyAggregateLimits.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOption (id=PolicyVehiclesLocationsOption) at ClaimPrintout.pcf: line 1327, column 44
    function printable_436 () : java.lang.Boolean {
      return helper.isAutoClaim()
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1345, column 53
    function printable_438 () : java.lang.Boolean {
      return canShowClaimPolicyLocations
    }
    
    // 'printable' attribute on PrintOption (id=PolicyTrips) at ClaimPrintout.pcf: line 1356, column 47
    function printable_443 () : java.lang.Boolean {
      return canShowClaimPolicyTrips
    }
    
    // 'printable' attribute on PrintOption (id=PolicyStatCodesOption) at ClaimPrintout.pcf: line 1383, column 46
    function printable_448 () : java.lang.Boolean {
      return canShowPolicyStatCodes
    }
    
    // PrintSection (id=Policy3Section) at ClaimPrintout.pcf: line 1314, column 44
    function value_473 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Policy3Section) at ClaimPrintout.pcf: line 1314, column 44
    function visible_472 () : java.lang.Boolean {
      return perm.System.viewpolicy
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Policy3Section) at ClaimPrintout.pcf: line 1314, column 44
    function visible_474 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Policy3Section) at ClaimPrintout.pcf: line 1314, column 44
    function visible_478 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PropertyIncident2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 467, column 51
    function locationRef_105 (fixedPropertyIncident :  FixedPropertyIncident) : pcf.api.Destination {
      return pcf.FixedPropertyIncidentDetailPrint.createDestination(fixedPropertyIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 463, column 64
    function locationRef_107 () : pcf.api.Destination {
      return pcf.FixedPropertyIncidentPrint.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 463, column 64
    function printable_106 () : java.lang.Boolean {
      return !helper.FixedPropertyIncidents.IsEmpty
    }
    
    // 'printable' attribute on PrintSection (id=PropertyIncident2Section) at ClaimPrintout.pcf: line 457, column 49
    function printable_109 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // PrintSection (id=PropertyIncident2Section) at ClaimPrintout.pcf: line 457, column 49
    function visible_108 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PropertyIncident3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=PropertyIncident3Section) at ClaimPrintout.pcf: line 1105, column 49
    function defaultSetter_312 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1115, column 51
    function locationRef_305 (fixedPropertyIncident :  FixedPropertyIncident) : pcf.api.Destination {
      return pcf.FixedPropertyIncidentDetailPrint.createDestination(fixedPropertyIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1111, column 64
    function locationRef_307 () : pcf.api.Destination {
      return pcf.FixedPropertyIncidentPrint.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1111, column 64
    function printable_306 () : java.lang.Boolean {
      return !helper.FixedPropertyIncidents.IsEmpty
    }
    
    // PrintSection (id=PropertyIncident3Section) at ClaimPrintout.pcf: line 1105, column 49
    function value_309 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=PropertyIncident3Section) at ClaimPrintout.pcf: line 1105, column 49
    function visible_308 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // 'childrenVisible' attribute on PrintSection (id=PropertyIncident3Section) at ClaimPrintout.pcf: line 1105, column 49
    function visible_310 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=PropertyIncident3Section) at ClaimPrintout.pcf: line 1105, column 49
    function visible_314 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SpecialInvestigations1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 169, column 45
    function locationRef_24 () : pcf.api.Destination {
      return pcf.SIDetails.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=SpecialInvestigations1Section) at ClaimPrintout.pcf: line 164, column 49
    function printable_26 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // PrintSection (id=SpecialInvestigations1Section) at ClaimPrintout.pcf: line 164, column 49
    function visible_25 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SpecialInvestigations2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 569, column 45
    function locationRef_137 () : pcf.api.Destination {
      return pcf.SIDetails.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=SpecialInvestigations2Section) at ClaimPrintout.pcf: line 564, column 49
    function printable_139 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // PrintSection (id=SpecialInvestigations2Section) at ClaimPrintout.pcf: line 564, column 49
    function visible_138 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SpecialInvestigations3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=SpecialInvestigations3Section) at ClaimPrintout.pcf: line 1218, column 49
    function defaultSetter_371 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1223, column 45
    function locationRef_366 () : pcf.api.Destination {
      return pcf.SIDetails.createDestination(Claim)
    }
    
    // PrintSection (id=SpecialInvestigations3Section) at ClaimPrintout.pcf: line 1218, column 49
    function value_368 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=SpecialInvestigations3Section) at ClaimPrintout.pcf: line 1218, column 49
    function visible_367 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // 'childrenVisible' attribute on PrintSection (id=SpecialInvestigations3Section) at ClaimPrintout.pcf: line 1218, column 49
    function visible_369 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=SpecialInvestigations3Section) at ClaimPrintout.pcf: line 1218, column 49
    function visible_373 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Subrogation1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 355, column 54
    function locationRef_76 () : pcf.api.Destination {
      return pcf.SubrogationGeneral.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Subrogation1Section) at ClaimPrintout.pcf: line 350, column 87
    function printable_78 () : java.lang.Boolean {
      return perm.System.viewsubrodetails and Claim.SubrogationSummary != null
    }
    
    // PrintSection (id=Subrogation1Section) at ClaimPrintout.pcf: line 350, column 87
    function visible_77 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Subrogation2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 838, column 54
    function locationRef_211 () : pcf.api.Destination {
      return pcf.SubrogationGeneral.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Subrogation2Section) at ClaimPrintout.pcf: line 833, column 87
    function printable_213 () : java.lang.Boolean {
      return perm.System.viewsubrodetails and Claim.SubrogationSummary != null
    }
    
    // PrintSection (id=Subrogation2Section) at ClaimPrintout.pcf: line 833, column 87
    function visible_212 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Subrogation3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Subrogation3Section) at ClaimPrintout.pcf: line 1778, column 87
    function defaultSetter_599 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1783, column 54
    function locationRef_594 () : pcf.api.Destination {
      return pcf.SubrogationGeneral.createDestination(Claim)
    }
    
    // PrintSection (id=Subrogation3Section) at ClaimPrintout.pcf: line 1778, column 87
    function value_596 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Subrogation3Section) at ClaimPrintout.pcf: line 1778, column 87
    function visible_595 () : java.lang.Boolean {
      return perm.System.viewsubrodetails and Claim.SubrogationSummary != null
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Subrogation3Section) at ClaimPrintout.pcf: line 1778, column 87
    function visible_597 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Subrogation3Section) at ClaimPrintout.pcf: line 1778, column 87
    function visible_601 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Summary1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 119, column 48
    function locationRef_11 () : pcf.api.Destination {
      return pcf.ClaimSummary.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 121, column 47
    function locationRef_12 () : pcf.api.Destination {
      return pcf.ClaimStatus.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Summary1Section) at ClaimPrintout.pcf: line 114, column 50
    function printable_14 () : java.lang.Boolean {
      return perm.System.viewclaimsummary
    }
    
    // PrintSection (id=Summary1Section) at ClaimPrintout.pcf: line 114, column 50
    function visible_13 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Summary2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 401, column 48
    function locationRef_90 () : pcf.api.Destination {
      return pcf.ClaimSummary.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 403, column 47
    function locationRef_91 () : pcf.api.Destination {
      return pcf.ClaimStatus.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Summary2Section) at ClaimPrintout.pcf: line 396, column 50
    function printable_93 () : java.lang.Boolean {
      return perm.System.viewclaimsummary
    }
    
    // PrintSection (id=Summary2Section) at ClaimPrintout.pcf: line 396, column 50
    function visible_92 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Summary3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Summary3Section) at ClaimPrintout.pcf: line 1019, column 50
    function defaultSetter_271 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1024, column 48
    function locationRef_262 () : pcf.api.Destination {
      return pcf.ClaimSummary.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1026, column 47
    function locationRef_263 () : pcf.api.Destination {
      return pcf.ClaimStatus.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1032, column 48
    function locationRef_264 () : pcf.api.Destination {
      return pcf.ClaimSummary.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1038, column 54
    function locationRef_265 () : pcf.api.Destination {
      return pcf.ClaimSummary.createDestination(Claim, true)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1044, column 47
    function locationRef_266 () : pcf.api.Destination {
      return pcf.ClaimStatus.createDestination(Claim)
    }
    
    // PrintSection (id=Summary3Section) at ClaimPrintout.pcf: line 1019, column 50
    function value_268 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Summary3Section) at ClaimPrintout.pcf: line 1019, column 50
    function visible_267 () : java.lang.Boolean {
      return perm.System.viewclaimsummary
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Summary3Section) at ClaimPrintout.pcf: line 1019, column 50
    function visible_269 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Summary3Section) at ClaimPrintout.pcf: line 1019, column 50
    function visible_273 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TravelIncident2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 531, column 42
    function locationRef_125 (TripIncident :  TripIncident) : pcf.api.Destination {
      return pcf.TripIncidentDetailPrint.createDestination(Claim, TripIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 527, column 55
    function locationRef_127 () : pcf.api.Destination {
      return pcf.TripIncidentsPrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 539, column 45
    function locationRef_128 (BaggageIncident :  BaggageIncident) : pcf.api.Destination {
      return pcf.BaggageIncidentDetailPrint.createDestination(Claim, BaggageIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 535, column 58
    function locationRef_130 () : pcf.api.Destination {
      return pcf.BaggageIncidentsPrint.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 527, column 55
    function printable_126 () : java.lang.Boolean {
      return !helper.TripIncidents.IsEmpty
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 535, column 58
    function printable_129 () : java.lang.Boolean {
      return !helper.BaggageIncidents.IsEmpty
    }
    
    // 'printable' attribute on PrintSection (id=TravelIncident2Section) at ClaimPrintout.pcf: line 521, column 44
    function printable_132 () : java.lang.Boolean {
      return helper.isTravelClaim()
    }
    
    // PrintSection (id=TravelIncident2Section) at ClaimPrintout.pcf: line 521, column 44
    function visible_131 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TravelIncident3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=TravelIncident3Section) at ClaimPrintout.pcf: line 1169, column 44
    function defaultSetter_351 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1179, column 42
    function locationRef_341 (TripIncident :  TripIncident) : pcf.api.Destination {
      return pcf.TripIncidentDetailPrint.createDestination(Claim, TripIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1175, column 55
    function locationRef_343 () : pcf.api.Destination {
      return pcf.TripIncidentsPrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1187, column 45
    function locationRef_344 (BaggageIncident :  BaggageIncident) : pcf.api.Destination {
      return pcf.BaggageIncidentDetailPrint.createDestination(Claim, BaggageIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1183, column 58
    function locationRef_346 () : pcf.api.Destination {
      return pcf.BaggageIncidentsPrint.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1175, column 55
    function printable_342 () : java.lang.Boolean {
      return !helper.TripIncidents.IsEmpty
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1183, column 58
    function printable_345 () : java.lang.Boolean {
      return !helper.BaggageIncidents.IsEmpty
    }
    
    // PrintSection (id=TravelIncident3Section) at ClaimPrintout.pcf: line 1169, column 44
    function value_348 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=TravelIncident3Section) at ClaimPrintout.pcf: line 1169, column 44
    function visible_347 () : java.lang.Boolean {
      return helper.isTravelClaim()
    }
    
    // 'childrenVisible' attribute on PrintSection (id=TravelIncident3Section) at ClaimPrintout.pcf: line 1169, column 44
    function visible_349 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=TravelIncident3Section) at ClaimPrintout.pcf: line 1169, column 44
    function visible_353 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class VehicleIncident2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 448, column 45
    function locationRef_101 (vehicleIncident :  VehicleIncident) : pcf.api.Destination {
      return pcf.VehicleIncidentDetailPrint.createDestination(vehicleIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 444, column 55
    function locationRef_102 () : pcf.api.Destination {
      return pcf.VehicleIncidentPrint.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=VehicleIncident2Section) at ClaimPrintout.pcf: line 439, column 74
    function printable_104 () : java.lang.Boolean {
      return helper.isAutoClaim() and perm.System.viewclaimbasics
    }
    
    // PrintSection (id=VehicleIncident2Section) at ClaimPrintout.pcf: line 439, column 74
    function visible_103 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class VehicleIncident3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=VehicleIncident3Section) at ClaimPrintout.pcf: line 1087, column 74
    function defaultSetter_301 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1096, column 45
    function locationRef_295 (vehicleIncident :  VehicleIncident) : pcf.api.Destination {
      return pcf.VehicleIncidentDetailPrint.createDestination(vehicleIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1092, column 55
    function locationRef_296 () : pcf.api.Destination {
      return pcf.VehicleIncidentPrint.createDestination(Claim)
    }
    
    // PrintSection (id=VehicleIncident3Section) at ClaimPrintout.pcf: line 1087, column 74
    function value_298 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=VehicleIncident3Section) at ClaimPrintout.pcf: line 1087, column 74
    function visible_297 () : java.lang.Boolean {
      return helper.isAutoClaim() and perm.System.viewclaimbasics
    }
    
    // 'childrenVisible' attribute on PrintSection (id=VehicleIncident3Section) at ClaimPrintout.pcf: line 1087, column 74
    function visible_299 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=VehicleIncident3Section) at ClaimPrintout.pcf: line 1087, column 74
    function visible_303 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Workplan1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 133, column 49
    function locationRef_15 () : pcf.api.Destination {
      return pcf.ClaimWorkplan.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Workplan1Section) at ClaimPrintout.pcf: line 128, column 46
    function printable_17 () : java.lang.Boolean {
      return perm.System.viewworkplan
    }
    
    // PrintSection (id=Workplan1Section) at ClaimPrintout.pcf: line 128, column 46
    function visible_16 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Workplan2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 419, column 38
    function locationRef_94 (Activity :  Activity) : pcf.api.Destination {
      return pcf.ActivityDetailPrint.createDestination(Activity)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 415, column 48
    function locationRef_95 () : pcf.api.Destination {
      return pcf.ClaimWorkplan.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Workplan2Section) at ClaimPrintout.pcf: line 410, column 46
    function printable_97 () : java.lang.Boolean {
      return perm.System.viewworkplan
    }
    
    // PrintSection (id=Workplan2Section) at ClaimPrintout.pcf: line 410, column 46
    function visible_96 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Workplan3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Workplan3Section) at ClaimPrintout.pcf: line 1051, column 46
    function defaultSetter_282 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1056, column 49
    function locationRef_275 () : pcf.api.Destination {
      return pcf.ClaimWorkplan.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1066, column 38
    function locationRef_276 (Activity :  Activity) : pcf.api.Destination {
      return pcf.ActivityDetailPrint.createDestination(Activity)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1062, column 48
    function locationRef_277 () : pcf.api.Destination {
      return pcf.ClaimWorkplan.createDestination(Claim)
    }
    
    // PrintSection (id=Workplan3Section) at ClaimPrintout.pcf: line 1051, column 46
    function value_279 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Workplan3Section) at ClaimPrintout.pcf: line 1051, column 46
    function visible_278 () : java.lang.Boolean {
      return perm.System.viewworkplan
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Workplan3Section) at ClaimPrintout.pcf: line 1051, column 46
    function visible_280 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Workplan3Section) at ClaimPrintout.pcf: line 1051, column 46
    function visible_284 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  
}