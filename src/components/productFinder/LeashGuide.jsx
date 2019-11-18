import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import LeashGuideSteps from './LeashGuideSteps'

function LeashGuide() {
  const { t } = useTranslation()
  const [isDialogOpen, setDialog] = useState(false)

  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => setDialog(true)}
      >
        {t('leashGuide.title')}
      </Button>
      <Dialog open={isDialogOpen} onClose={() => setDialog(false)} fullWidth>
        <LeashGuideSteps onClose={() => setDialog(false)} />
      </Dialog>
    </>
  )
}

export default LeashGuide